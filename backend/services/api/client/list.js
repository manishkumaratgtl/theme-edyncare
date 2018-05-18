'use strict';

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');

module.exports.list = (event, context, callback) => {
  const params = {
    TableName: process.env.CLIENT_DYNAMODB_TABLE
  };  

  const respHeaders = {
    "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
  };
  //TODO: Perform schema validation here;
  // fetch todo from the database
  dynamodb.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      respHeaders["Content-Type"] = "text/plain";
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: respHeaders,
        body: 'Couldn\'t fetch the client list.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      headers: respHeaders,
      body: JSON.stringify(result.Items)
    };
    callback(null, response);
  });
}
