'use strict';
const config = require('./../../../lib/config');
const HELLOSIGN_KEY = config.HELLOSIGN_KEY;
var hellosign = require('hellosign-sdk')({ key:HELLOSIGN_KEY });
const dynamodb = require('./../../../lib/dynamodb');

module.exports.signContract = (event, context, callback) => {
    const options = JSON.parse(event.body);
    const params = {
        TableName: process.env.CLIENT_CARER_CONTRACT_DYNAMODB_TABLE,
        KeyConditionExpression: "contractID = :a",
        ExpressionAttributeValues: {
            ":a": options.contractID
        }
    };
    const respHeaders = {
        "Access-Control-Allow-Origin": "*" // Required for CORS support to work
    };
    dynamodb.query(params, (error, result) => {
        // handle potential errors
        if (error) {
            console.error(error);
            respHeaders["Content-Type"] = "text/plain";
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: respHeaders,
                body: 'Couldn\'t fetch the contract URL.',
            });
            return;
        }

        if (result.Items) {
            result.Items[0].signatureData.signatures.forEach(element => {
                if (element.signer_email_address === options.Email) {
                    hellosign.embedded.getSignUrl(element.signature_id)
                        .then(function (res) {
                            options.sign_url = res.embedded.sign_url;
                            options.expires_at = res.embedded.expires_at;
                            const response = {
                                statusCode: 200,
                                headers: respHeaders,
                                body: JSON.stringify(options)
                            };
                            callback(null, response);
                        }).catch(function (error) {
                            const response = {
                                statusCode: 500,
                                headers: respHeaders,
                                body: JSON.stringify({ message: "invalid or used url", err: error })
                            };
                            callback(null, response);
                        });
                }
            });
        }
        else {
            respHeaders["Content-Type"] = "text/plain";
            const response = {
                statusCode: 404,
                headers: respHeaders,
                body: 'Specified contract not found.'
            };
            callback(null, response);
        }
    });

}