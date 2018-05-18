'use strict';
const dynamodb = require('./../../../lib/dynamodb');

module.exports.updateVisit = (event, context, callback) => {
    const timestamp = new Date().toISOString();
    const visit = JSON.parse(event.body);
    const respHeaders = {
        "Access-Control-Allow-Origin": "*" // Required for CORS support to work
    };

    visit.UpdatedDate = timestamp;
    let updateExpression = "SET "
    let expressionAttrNames = {};
    let expressionAttrValues = {};

    for (const key of Object.keys(visit)) {
        if (key != "Id") {
            updateExpression = updateExpression + "#" + key + " = :" + key + ", ";
            expressionAttrNames["#" + key] = key;
            expressionAttrValues[":" + key] = visit[key];
        }
    }

    updateExpression = updateExpression.slice(0, -2);

    const params = {
        TableName: process.env.CARER_VISIT_DYNAMODB_TABLE,
        Key: {
            Id: visit.Id
        },
        UpdateExpression: updateExpression,
        ExpressionAttributeNames: expressionAttrNames,
        ExpressionAttributeValues: expressionAttrValues
    };

    dynamodb.update(params, (error) => {
        // handle potential errors
        if (error) {
            console.error(error);
            respHeaders["Content-Type"] = "text/plain";
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: respHeaders,
                body: JSON.stringify({ success: false, message: "Couldn\'t update the visit." }),
            });
            return;
        }
        // create a response
        const response = {
            statusCode: 200,
            headers: respHeaders,
            body: JSON.stringify({ success: true, message: "visit updated" }),
        };
        callback(null, response);
    });
}
