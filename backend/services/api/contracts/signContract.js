'use strict';
const config = require('./../../../lib/config');
const HELLOSIGN_KEY = config.HELLOSIGN_KEY;
var hellosign = require('hellosign-sdk')({ key:HELLOSIGN_KEY });
const dynamodb = require('./../../../lib/dynamodb');

module.exports.signContract = (event, context, callback) => {
  const options = {};
  const respHeaders = {
    "Access-Control-Allow-Origin": "*" // Required for CORS support to work
  };

  const params = {
    TableName: process.env.CONTRACT_DYNAMODB_TABLE,
    KeyConditionExpression: "CarerId = :a",
    ExpressionAttributeValues: {
      ":a": event.pathParameters.id
    }
  };

  
  dynamodb.query(params, (error, result) => {
    // handle potential errors
    if (error) {
      respHeaders["Content-Type"] = "text/plain";
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: respHeaders,
        body: 'Couldn\'t fetch the contract URL.',
      });
      return;
    }

    if (result.Items) {
      const signature_id= result.Items[0].signature_request.signatures[0].signature_id;
      
      hellosign.embedded.getSignUrl(signature_id)
      .then(function (res) {
        

        options.sign_url = res.embedded.sign_url;
        options.expires_at = res.embedded.expires_at;
        console.log('options', options)
        const response = {
            statusCode: 200,
            headers: respHeaders,
            body: JSON.stringify(options)
        };
        console.log('response', response)

        callback(null, response);

      })
      .catch(function (error) {
          const response = {
              statusCode: 500,
              headers: respHeaders,
              body: JSON.stringify({ message: "invalid or used url", err: error })
          };
          callback(null, response);
      });
  }
  else {
      respHeaders["Content-Type"] = "text/plain";
      const response = {
          statusCode: 404,
          headers: respHeaders,
          body: 'Specified contract not found.'
      };
      callback(null, response);
  }
  }
);
}