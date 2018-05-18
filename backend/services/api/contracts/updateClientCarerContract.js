'use strict';

const dynamodb = require('./../../../lib/dynamodb');

module.exports.updateClientCarerContract = (event, context, callback) => {

    const data = JSON.parse(event.body);
    const respHeaders = {
        "Access-Control-Allow-Origin": "*"
    };
    var updateContract = ""
    if (data.carerSigned) {
        updateContract = "carer_completed"
    } else {
        updateContract = "clinet_completed"
    }
    var params = {
        TableName: process.env.CLIENT_CARER_CONTRACT_DYNAMODB_TABLE,
        Key: {
            contractID: data.id,
        },
        UpdateExpression: 'set #a = :b',
        ExpressionAttributeNames: { '#a': updateContract },
        ExpressionAttributeValues: {
            ':b': true,
        }
    };
    console.log(params);
    dynamodb.update(params, (error) => {
        // handle potential errors
        if (error) {
            respHeaders["Content-Type"] = "text/plain";
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: respHeaders,
                body: JSON.stringify({ success: false, message: "Couldn\'t update the contract." }),
            });
            return;
        }
        // create a response
        const response = {
            statusCode: 200,
            headers: respHeaders,
            body: JSON.stringify({ success: true, message: "contract completed set to true" }),
        };
        callback(null, response);
    });

}