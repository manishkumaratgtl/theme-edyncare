'use strict';

const dynamodb = require('./../../../lib/dynamodb');
module.exports.get = (event, context, callback) => {
    var postcode = decodeURIComponent(event.pathParameters.postcode).toLocaleUpperCase();
    const PostCodeQuery = {
        TableName: process.env.UKPOSTCODE_DYNAMODB_TABLE,
        Key: {
            postcode: postcode
        }
    };
    const respHeaders = {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
    };
    dynamodb.get(PostCodeQuery, (error, result) => {
        // handle potential errors
        if (error) {
            console.error(error);
            respHeaders["Content-Type"] = "text/plain";
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: respHeaders,
                body: 'Couldn\'t fetch the postcode.',
            });
            return;
        }

        if (result.Item) {
            // create a response
            respHeaders["Cache-Control"]="max-age=3600000"
            const response = {
                statusCode: 200,
                headers: respHeaders,
                body: JSON.stringify(result.Item)
            };
            callback(null, response);
        }
        else {
            respHeaders["Content-Type"] = "text/plain";
            const response = {
                statusCode: 404,
                headers: respHeaders,
                body: 'Specified post code not found.'
            };
            callback(null, response);
        }
    });
}
