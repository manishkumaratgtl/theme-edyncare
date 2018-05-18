'use strict';

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');

module.exports.read = (event, context, callback) => {

    const respHeaders = {
        "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
      };

    const params = {
//        TableName: process.env.CARER_DYNAMODB_TABLE+ "force_error",
        TableName: process.env.CARER_DYNAMODB_TABLE,
    };
    
    dynamodb.scan(params, (error, data)=> {
        if (error) {
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: respHeaders,
                body: 'Couldn\'t scan carer table.',
            })
        }
        callback(null, {
            statusCode: 200,
            headers: respHeaders,
            body: JSON.stringify(data.Items)
        })
    })
}

