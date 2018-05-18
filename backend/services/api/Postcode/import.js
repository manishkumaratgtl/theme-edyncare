'use strict';
const dynamodb = require('./../../../lib/dynamodb');
const respHeaders = {
    "Access-Control-Allow-Origin": "*" // Required for CORS support to work
};
const dynamoDbCallback = (err, data) => {
    if (err) {
        console.log('Could not insert records: ', err);
    }
    if (data) {
        console.log('Inserted successfully:', data);
    }
};
var postcodes = [];
var batchRequest = {};
batchRequest.RequestItems = {};

const pefromBatchInsert = (callback) => {
    if (postcodes.length > 0) {
        var batchPostCodes = [];
        var maxLen = postcodes.length > 25 ? 25 : postcodes.length;
        for (var idx = 0; idx < maxLen; idx++) {
            batchPostCodes.push(postcodes.pop());
        }
        batchRequest.RequestItems[process.env.UKPOSTCODE_DYNAMODB_TABLE] = batchPostCodes;
        dynamodb.batchWrite(batchRequest, (error, data) => {
            if (error) {
                console.log(error);
            }
            if (data && data.UnprocessedItems && data.UnprocessedItems[process.env.UKPOSTCODE_DYNAMODB_TABLE]) {
                console.log("There were few unprocessed items.")
                console.log(data);
                for (let index = 0; index < data.UnprocessedItems[process.env.UKPOSTCODE_DYNAMODB_TABLE].length; index++) {
                    postcodes.push(data.UnprocessedItems[process.env.UKPOSTCODE_DYNAMODB_TABLE].pop());
                }
            }
            pefromBatchInsert(callback);
        });
    }
    else {
        callback(null, {
            statusCode: 200,
            headers: respHeaders,
            body: "All done",
        });
    }
}

module.exports.import = (event, context, callback) => {
    var reqItems = JSON.parse(event.body);
    reqItems.forEach(element => {
        var postCode = {};
        postCode.PutRequest = {};
        postCode.PutRequest.Item = element;
        postcodes.push(postCode);
    });

    pefromBatchInsert(callback);
}