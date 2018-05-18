'use strict';

var config = require('./config')

const HELLOSIGN_KEY = config.HELLOSIGN_KEY;
var hellosign = require('hellosign-sdk')({key: HELLOSIGN_KEY});

const uuid = require('uuid');
const dynamodb = require('./dynamodb');

module.exports.createContract = (event, context, callback) => {

  const options = event;
  
  const respHeaders = {
    "Access-Control-Allow-Origin": "*"
  };
  
  const contract = {
    "test_mode": 1,
    "clientId": options.clientId,
    "template_id": options.template_id,
    "subject": options.subject,
    "signers": options.signers,
  }

  hellosign.signatureRequest.createEmbeddedWithTemplate(contract)

    .then(function (response) {
      // var signatureId = response.signature_request.signatures[0].signature_id;
      // return hellosign.embedded.getSignUrl(signatureId); //Do not return getSignUrl as exspires after 60 mins
      // return response.signature_request
      console.log("S01", response)
      return new Promise ()
 
    })
    .catch(function (err) {
      //catch error
      console.log("E01", err)
      callback(err, null)
    });
}

module.exports.create = (options) => {
  
  const contract = {
    "test_mode": 1,
    "clientId": options.clientId,
    "template_id": options.template_id,
    "subject": options.subject,
    "signers": options.signers,
  }

  return new Promise((resolve, reject) => {
      hellosign.signatureRequest.createEmbeddedWithTemplate(contract)
      .then(function (res) {
        resolve(res);
      })
      .catch(function (err) {
        reject(err);
      })
  });
}

//New sign function for signContract.js
module.exports.sign = (signature_request) => {
  const signature_id= signature_request.signatures[0].signature_id;

  return new Promise((resolve, reject) => {
      hellosign.embedded.getSignUrl(signature_id)
      .then(function (res) {
        resolve(res);
      })
      .catch(function (err) {
        reject(err);
      })
  });
}

module.exports.signContract= (event, context, callback)=> {

    const params = {
        TableName: process.env.CONTRACT_DYNAMODB_TABLE,
        KeyConditionExpression: "CarerId = :a",
        ExpressionAttributeValues: {
          ":a": event.pathParameters.id
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
            body: 'Couldn\'t fetch the contract URL.',
          });
          return;
        }
    
        if (result.Items) {
        // create a response
          const response = {
            statusCode: 200,
            headers: respHeaders,
            body: JSON.stringify(result.Items[0])
          };
          callback(null, response);
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
      });
}