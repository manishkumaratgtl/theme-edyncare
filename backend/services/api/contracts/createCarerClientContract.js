'use strict';
const config = require('./../../../lib/config');
const HELLOSIGN_KEY = config.HELLOSIGN_KEY;
var hellosign = require('hellosign-sdk')({ key:HELLOSIGN_KEY });

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');

module.exports.createContract = (event, context, callback) => {

    const options = JSON.parse(event.body);
    const respHeaders = {
        "Access-Control-Allow-Origin": "*"
    };
    // console.log("event", options);

    const contract = {
        "test_mode": 1,
        "clientId": "e5de7a08ba6825eb9a9003bdefa03a61",
        "template_id": "175a6061b9d96d1717c97f78015cf70c96cffe73",
        "subject": options.subject,
        "signers": options.signers,
    }

    hellosign.signatureRequest.createEmbeddedWithTemplate(contract)

        .then(function (response) {
            return response.signature_request;
        })
        .then(function (response) {
            options.contractID = uuid.v1();
            options.timestamp = new Date().toISOString();
            options.status = "created"
            options.carer_completed = false;
            options.clinet_completed = false;
            options.signatureData = response
            const params = {
                TableName: process.env.CLIENT_CARER_CONTRACT_DYNAMODB_TABLE,
                Item: options,
            };
            addContract(params)
        })
        .catch(function (err) {
            //catch error
            console.log("E01", err)
            callback(err, null)
        });

    function addContract(params) {
        dynamodb.put(params, (error) => {
            // handle potential errors
            if (error) {
                console.error(error);
                respHeaders["Content-Type"] = "text/plain";
                callback(null, {
                    statusCode: error.statusCode || 501,
                    headers: respHeaders,
                    body: 'Couldn\'t create the contract.',
                });
                return;
            }
            const response = {
                statusCode: 200,
                headers: respHeaders,
                body: JSON.stringify(params.Item),
            };
            callback(null, response);
        });
    }
}