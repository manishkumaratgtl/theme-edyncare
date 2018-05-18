'use strict';

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');

module.exports.get = (event, context, callback) => {
  const ClientId= event.pathParameters.ClientId 

  var params = {
    TableName: process.env.CAREPLAN_DYNAMODB_TABLE,
    IndexName: 'ClientId-Index',
    KeyConditionExpression: 'ClientId = :clientId',
    ExpressionAttributeValues: {
        ':clientId':  ClientId
    }
  };

  console.log("params", params)

  const respHeaders = {
    "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
  };

  dynamodb.query(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      respHeaders["Content-Type"] = "text/plain";
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: respHeaders,
        body: 'Couldn\'t fetch the careplan.',
      });
      return;
    }
    console.log('result', result)
    if(result.Items) {
      const response = {
        statusCode: 200,
        headers: respHeaders,
        body: JSON.stringify(result.Items)
      };
      callback(null, response);
    }
    else {
      respHeaders["Content-Type"] = "text/plain";
      const response = {
        statusCode: 404,
        headers: respHeaders,
        body: 'Specified careplan not found.'
      };
      callback(null, response);
    }
  });
}
