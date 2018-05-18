'use strict';

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');

module.exports.create = (event, context, callback) => {
    const timestamp = new Date().toISOString();
    const visit = JSON.parse(event.body);
    const respHeaders = {
        "Access-Control-Allow-Origin": "*" // Required for CORS support to work
    };

    visit.Id = uuid.v1(); // Assing new id
    visit.Status = 'created'; // Set status which defaults to "Onboarding"
    visit.checkinTime = null
    visit.checkoutTime = null;
    visit.UpdatedDate = timestamp;

    const params = {
        TableName: process.env.CARER_VISIT_DYNAMODB_TABLE,
        Item: visit,
    };



    dynamodb.put(params, (error) => {
        // handle potential errors
        if (error) {
            console.error(error);
            respHeaders["Content-Type"] = "text/plain";
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: respHeaders,
                body: 'Couldn\'t create the visit.',
            });
            return;
        }

        // create a response
        const response = {
            statusCode: 200,
            headers: respHeaders,
            body: JSON.stringify(params.Item),
        };
        callback(null, response);
    });
}
