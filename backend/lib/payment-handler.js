'use strict';

const request = require('request-promise');
const config = require('./config')

const STRIPE_API_DOMAIN = config.STRIPE_API_DOMAIN;
const STRIPE_SECRET = config.STRIPE_SECRET;

var access_token = '';
var REQUEST_HEADER = {
    'Content-Type': 'application/json'
};

// create customer
module.exports.connectClient = (stripeToken, clientId) => {
    var stripe = require("stripe")(STRIPE_SECRET);
    return new Promise((resolve, reject) => {
        stripe.customers.create({
            source: stripeToken.id,
            email: stripeToken.email,
            metadata: {
                clientId: clientId
            }
        }).then(function (customer) {
            resolve(customer);
        }).catch(function (err) {
            reject(err);
        });
    });
}

module.exports.connectCarer = (code) => {
    console.log(code.id);
    return new Promise((resolve, reject) => {
        const options = {
            method: 'POST',
            uri: pSTRIPE_API_DOMAIN + 'oauth/token',
            headers: REQUEST_HEADER,
            body: {
                'client_secret': STRIPE_SECRET,
                'code': code,
                'grant_type': 'authorization_code'
            },
            json: true
        };
        request(options).then(function (res) {
            resolve(res);
        }).catch(function (err) {
            reject(err);
        })
    });
}