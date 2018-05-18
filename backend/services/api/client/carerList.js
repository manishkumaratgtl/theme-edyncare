'use strict';

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');
const distance = require('google-distance-matrix');
const config = require('./../../../lib/config')
const GOOGLE_API_KEY = config.GOOGLE_API_KEY;
const respHeaders = {
    "Access-Control-Allow-Origin": "*" // Required for CORS support to work
};

var resultItems = [];
var finalResults = [];
var destination;

const getDistanceForCarer = (callback) => {
    if (resultItems.length > 0) {
        var item = resultItems.pop();
        
        distance.matrix([item.postCode], [destination], function (err, distances) {
            if (!err)
                item["distances"] = distances.rows[0].elements[0];
            finalResults.push(item);
            // console.log(finalArray);
            finalResults.sort(function (a, b) {
                return a.distances.distance.value - b.distances.distance.value;
            });
            getDistanceForCarer(callback);
        })
    }
    else {
        const response = {
            statusCode: 200,
            headers: respHeaders,
            body: JSON.stringify(finalResults)
        };
        callback(null, response);
    }
}


module.exports.get = (event, context, callback) => {

    const param = {
        TableName: process.env.CLIENT_DYNAMODB_TABLE
    };
    dynamodb.scan(param, (error, result) => {
        if (error) ppJson(error); // an error occurred

        const clients = result.Items;
        destination = clients[0].postCode;
        let FilterExpression = "Gender = :gen  ";//AND  NoticePeriod = :np
        let ExpressionAttributeValues = {
            ':gen': clients[0].gender
        }

        clients[0].interests.forEach(function (item, index) {
            FilterExpression = FilterExpression + " AND  contains (AreasOfInterest , :AOI" + index + ")";
            ExpressionAttributeValues[":AOI" + index] = item;
        });

        clients[0].careNeeds.forEach(function (item, index) {
            FilterExpression = FilterExpression + " AND contains (CareExperience , :CSR" + index + ")";
            ExpressionAttributeValues[":CSR" + index] = item;
        });

        const params = {
            TableName: process.env.CARER_DYNAMODB_TABLE,
            // Removes all filtering
            //FilterExpression: FilterExpression,
            //ExpressionAttributeValues: ExpressionAttributeValues
        };

        dynamodb.scan(params, (error, result) => {
            // handle potential errors
            if (error) {
                console.error(error);
                respHeaders["Content-Type"] = "text/plain";
                callback(null, {
                    statusCode: error.statusCode || 501,
                    headers: respHeaders,
                    body: 'Couldn\'t fetch the carers list. E01',
                });
                return;
            }

            distance.key(GOOGLE_API_KEY);
            distance.mode('driving');
            distance.language('en');

            if (result.Items.length > 0) {
                resultItems = result.Items;
                getDistanceForCarer(callback);
            }
            else {
                const response = {
                    statusCode: 200,
                    headers: respHeaders,
                    body: JSON.stringify(result.Items)
                };
                callback(null, response);
                // create a response
            }

        });
    });

}
