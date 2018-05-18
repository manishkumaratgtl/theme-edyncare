'use strict';

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');
//const clients = require("./DUMMYclientOnboarding.js");

module.exports.create = (event, context, callback) => {

    const timestamp = new Date().toISOString();
    const careTeam = JSON.parse(event.body);
    const respHeaders = {
        "Access-Control-Allow-Origin": "*" // Required for CORS support to work
    };
    careTeam.clientID = uuid.v1(); // Assing new id
    careTeam.status = "Pending";
    careTeam.RegistrationDate = timestamp;
    careTeam.UpdatedDate = timestamp;

    const params = {
        TableName: process.env.MY_CARE_TEAM_DYNAMODB_TABLE,
        Item: careTeam,
    };

    dynamodb.put(params, (error) => {
        // handle potential errors
        if (error) {
            console.error(error);
            respHeaders["Content-Type"] = "text/plain";
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: respHeaders,
                body: 'Couldn\'t add the carer to my team.',
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



