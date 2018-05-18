'use strict';

const dynamodb = require('./../../../lib/dynamodb');

module.exports.updateContract = (event, context, callback) => {

    const data = JSON.parse(event.body);
    const respHeaders = {
        "Access-Control-Allow-Origin": "*"
    };
    const params = {
        TableName: process.env.CONTRACT_DYNAMODB_TABLE,
        Key: {
            signerCarerID: event.pathParameters.id,

        },
        UpdateExpression: 'set #a = :b',
        ExpressionAttributeNames: { '#a': 'is_complete' },
        ExpressionAttributeValues: {
            ':b': true,
        }
    };

    dynamodb.update(params, (error) => {
        // handle potential errors
        if (error) {
            console.error(error);
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