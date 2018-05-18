'use strict';

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');

module.exports.validateEmail = (event, context, callback) => {
    const carer = decodeURIComponent(event.pathParameters.email).toLowerCase();
    const respHeaders = {
        "Access-Control-Allow-Origin": "*" // Required for CORS support to work
    };

    const EmailQuery = {
        TableName: process.env.CARER_DYNAMODB_TABLE,
        IndexName: 'Email-Index', // optional (if querying an index)
        KeyConditionExpression: 'email = :email',
        ExpressionAttributeValues: {
            ':email': carer
        }
    };

    dynamodb.query(EmailQuery, function (err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        } else if (data.Count > 0) {
            respHeaders["Content-Type"] = "application/json";
            callback(null, {
                statusCode: 200,
                headers: respHeaders,
                body: JSON.stringify({ success: false, message: "Email is taken." }),
            });
            return;
        }
        respHeaders["Content-Type"] = "application/json";
        callback(null, {
            statusCode: 404,
            headers: respHeaders,
            body: JSON.stringify({ success: true, message: "Email available." }),
        });
    });
}
