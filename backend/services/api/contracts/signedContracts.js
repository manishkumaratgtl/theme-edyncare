'use strict';

// var hellosign = require('hellosign-sdk')({ key: '309dc20ae719d06124eea96fac9fdf681a3c3144ad24d16350b58da6ef0b24d3' });
const dynamodb = require('./../../../lib/dynamodb');

module.exports.signedContracts = (event, context, callback) => {

    const respHeaders = {
        "Access-Control-Allow-Origin": "*" // Required for CORS support to work
    };

    const params = {
        TableName: process.env.CLIENT_CARER_CONTRACT_DYNAMODB_TABLE,
        FilterExpression: "carer_completed = :value AND client_completed = :value",
        ExpressionAttributeValues: {
            ':value': true
        }
    };

    dynamodb.scan(params, (error, result) => {
        // handle potential errors
        if (error) {
            console.error(error);
            respHeaders["Content-Type"] = "text/plain";
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: respHeaders,
                body: 'Couldn\'t fetch the contracts.',
            });
            return;
        }

        console.log("this ", result);
        const response = {
            statusCode: 200,
            headers: respHeaders,
            body: JSON.stringify(result.Items),
        };
        callback(null, response);
    });


    /* get the list of signed contracts` from hellosign
    hellosign.signatureRequest.list({ page_size: 20, query: 'complete:true' })
         .then(function (response11) {
 
             const response = {
                 statusCode: 200,
                 headers: respHeaders,
                 body: JSON.stringify(response11)
             };
             callback(null, response);        //parse response
         })
         .catch(function (err) {
             const response = {
                 statusCode: 400,
                 headers: respHeaders,
                 body: JSON.stringify(err)
             };
             callback(null, response);        //pars
         });
         console.log(params);*/
}