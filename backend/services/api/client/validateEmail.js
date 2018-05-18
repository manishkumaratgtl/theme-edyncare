'use strict';

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');

module.exports.validateEmail = (event, context, callback) => {
    const clientEmail = decodeURIComponent(event.pathParameters.email).toLowerCase();
    const respHeaders = {
        "Access-Control-Allow-Origin": "*" // Required for CORS support to work
    };

    const EmailQuery = {
        TableName: process.env.CLIENT_DYNAMODB_TABLE,
        IndexName: 'Email-Index',
        KeyConditionExpression: 'Email = :email',
        ExpressionAttributeValues: {
            ':email': clientEmail
        }
    };

    dynamodb.query(EmailQuery, function (err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        } else if (data.Count > 0) {
            respHeaders["Content-Type"] = "application/json";
            callback(null, {
                statusCode: 409,
                headers: respHeaders,
                body: JSON.stringify({ success: false, message: "Email is taken." }),
            });
            return;
        }
        respHeaders["Content-Type"] = "application/json";
        callback(null, {
            statusCode: 200,
            headers: respHeaders,
            body: JSON.stringify({ success: true, message: "Email available." }),
        });
    });
}
