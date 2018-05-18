'use strict';

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');
const paymentHandler = require('./../../../lib/payment-handler');

module.exports.connectUser = (event, context, callback) => {
    const respHeaders = {
        "Access-Control-Allow-Origin": "*" // Required for CORS support to work
    };
    const params = JSON.parse(event.body);
    switch (params.type) {
        case "carer":
            paymentHandler.connectCarer(params.token)
                .then(function (response) {
                    response.CarerId = params.CarerId;

                    const carerPaymentInformaiton = {
                        TableName: process.env.CARER_PAYMENT_INFORMATION_DYNAMODB_TABLE,
                        Item: response,
                    };
                    dynamodb.put(carerPaymentInformaiton, (error) => {
                        // handle potential errors
                        if (error) {
                            return callback(null, {
                                statusCode: error.statusCode || 501,
                                headers: respHeaders,
                                body: 'Couldn\'t create the carer\'s stripe account.',
                            });
                        }
                        return callback(null, res);
                    });                    
                })
                .catch(function (err) {
                    return callback(null, {
                        statusCode: err.statusCode || 501,
                        headers: respHeaders,
                        body: err.message,
                    });
                });;
            break;
        case "client":
            paymentHandler.connectClient(params.token, params.ClientId).then(function (response) {
                const res = {
                    statusCode: 200,
                    headers: respHeaders,
                    body: response,
                };
                response.ClientId = params.ClientId;

                const clientPaymentInformaiton = {
                    TableName: process.env.CLIENT_PAYMENT_INFORMATION_DYNAMODB_TABLE,
                    Item: response,
                };
                dynamodb.put(clientPaymentInformaiton, (error) => {
                    // handle potential errors
                    if (error) {
                        return callback(null, {
                            statusCode: error.statusCode || 501,
                            headers: respHeaders,
                            body: 'Couldn\'t create the client\'s stripe account.',
                        });
                    }

                });
                return callback(null, res);
            }).catch(function (err) {
                return callback(null, {
                    statusCode: err.statusCode || 501,
                    headers: respHeaders,
                    body: err.message,
                });
            });
            break;
        default:
            break;
    }
}