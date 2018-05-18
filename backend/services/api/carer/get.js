'use strict';

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');

module.exports.get = (event, context, callback) => {
  const params = {
    TableName: process.env.CARER_DYNAMODB_TABLE,
    Key: {
      Id: event.pathParameters.id,
    },
  };  

  const respHeaders = {
    "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
  };
  //TODO: Perform schema validation here;
  // fetch todo from the database
  dynamodb.get(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      respHeaders["Content-Type"] = "text/plain";
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: respHeaders,
        body: 'Couldn\'t fetch the carer.',
      });
      return;
    }

    if(result.Item) {
    // create a response
      const response = {
        statusCode: 200,
        headers: respHeaders,
        body: JSON.stringify(result.Item)
      };
      callback(null, response);
    }
    else{
      respHeaders["Content-Type"] = "text/plain";
      const response = {
        statusCode: 404,
        headers: respHeaders,
        body: 'Specified carer not found.'
      };
      callback(null, response);
    }
  });
}
