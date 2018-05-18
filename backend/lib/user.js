'use strict';

const request = require('request-promise');
const jwtDecode = require('jwt-decode');
const config = require('./config');

const AUTH0_CLIENTID = config.AUTH0_CLIENTID;
const AUTH0_CLIENT_SECRET = config.AUTH0_CLIENT_SECRET;
const AUTH0_API_DOMAIN = config.AUTH0_API_DOMAIN;
const AUTH0_CONNECTION_TYPE = 'Username-Password-Authentication';

var access_token = '';
const REQUEST_HEADER = {
    'Content-Type': 'application/json'
};
const ensureValidAccessToken = () => {
    //check process.env.ACCESS_TOKEN exists
    var current_token = access_token || process.env['ACCESS_TOKEN'];
    if (!current_token) {
        return recreateToken();
    }
    else {
        var decoded = jwtDecode(current_token);
        const timestamp = new Date();
        var currentTime = (timestamp.getTime() / 1000 | 0);
        if (currentTime > decoded.exp) {
            return recreateToken();
        }
        else {
            REQUEST_HEADER["Authorization"] = 'Bearer ' + access_token;
            return new Promise((resolve, reject) => { resolve() });
        }
    }

}
const recreateToken = () => {
    const requestData = {
        client_id: AUTH0_CLIENTID,
        client_secret: AUTH0_CLIENT_SECRET,
        audience: AUTH0_API_DOMAIN + 'api/v2/',
        grant_type: 'client_credentials',
    };

    // Configure the request
    const options = {
        method: 'POST',
        uri: AUTH0_API_DOMAIN + 'oauth/token',
        headers: {
            'Content-Type': 'application/json'
        },
        body: requestData,
        json: true
    }

    const respHeaders = {
        "Access-Control-Allow-Origin": "*" // Required for CORS support to work
    };

    return new Promise((resolve, reject) => {
        request(options)
            .then(function (res) {
                access_token = res.access_token;
                process.env['ACCESS_TOKEN'] = access_token;
                REQUEST_HEADER["Authorization"] = 'Bearer ' + access_token;
                resolve();
            })
            .catch(function (err) {
                const resError = {
                    statusCode: err.statusCode || 501,
                    headers: respHeaders,
                    body: err.message,
                };
                reject(resError)
            })
    });

}


module.exports.create = (email, password, userType, id) => {

    const requestData = {
        connection: AUTH0_CONNECTION_TYPE,
        email: email,
        password: password,
        user_metadata: { type: userType, id: id },
    };

    return new Promise((resolve, reject) => {
        ensureValidAccessToken()
            .then(function () {
                // Configure the request
                const options = {
                    method: 'POST',
                    uri: AUTH0_API_DOMAIN + 'api/v2/users',
                    headers: REQUEST_HEADER,
                    body: requestData,
                    json: true
                };
                request(options).then(function (res) {
                    resolve(res);
                }).catch(function (err) {
                    reject(err);
                })
            })
            .catch(function (err) { reject(err) });
    });
}

module.exports.resetPassword = (email) => {

    var requestData = {
        'client_id': AUTH0_CLIENTID,
        'email': email,
        'connection': AUTH0_CONNECTION_TYPE
    }

    return new Promise((resolve, reject) => {
        ensureValidAccessToken()
            .then(function () {
                // Configure the request
                const options = {
                    method: 'POST',
                    uri: AUTH0_API_DOMAIN + 'dbconnections/change_password',
                    headers: REQUEST_HEADER,
                    body: requestData,
                    json: true
                }
                request(options).then(function (res) {
                    resolve(res);
                }).catch(function (err) {
                    reject(err);
                })
            })
            .catch(function (err) { reject(err) });
    });
}

module.exports.changePassword = (email, newPassword, callback) => {

    return new Promise((resolve, reject) => {
        ensureValidAccessToken()
            .then(function () {
                // Configure the request
                const options = {
                    method: 'GET',
                    uri: AUTH0_API_DOMAIN + 'api/v2/user-by-email?email=' + email + '&connection=' + AUTH0_CONNECTION_TYPE + '&fields=user_id',
                    headers: REQUEST_HEADER,
                    json: true
                }
                request(options) // Find user in Auth0 by user email
                    .then(function (res) { 
                        if (res.user_id) {
                            const optionsChangePassword = {
                                method: 'PATCH',
                                uri: AUTH0_API_DOMAIN + 'api/v2/users/' + res.user_id,
                                headers: REQUEST_HEADER,
                                body: {
                                    'password': newPassword,
                                    'connection': AUTH0_CONNECTION_TYPE
                                },
                                json: true
                            }
                            request(optionsChangePassword).then(function (res) { // Update the password
                                resolve(res);
                            }).catch(function (err) {
                                reject(err);
                            });
                        } else {
                            resolve(res);
                        }
                    }).catch(function (err) {
                        reject(err);
                    });
            })
            .catch(function (err) { reject(err) });
    });
}