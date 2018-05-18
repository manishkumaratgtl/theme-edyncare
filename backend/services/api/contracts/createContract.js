'use strict';

const config = require('./../../../lib/config');
const HELLOSIGN_KEY = config.HELLOSIGN_KEY;
var hellosign = require('hellosign-sdk')({ key:HELLOSIGN_KEY });

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');
const contracts = require('./../../../lib/contracts');

module.exports.createContract = (event, context, callback) => {

  console.log("event", event)

  const options = JSON.parse(event.body);
  const respHeaders = {
    "Access-Control-Allow-Origin": "*"
  };
  
  options.clientId = "e5de7a08ba6825eb9a9003bdefa03a61";
  options.template_id = "3012769cda144884886d5b438d5de339cab7aa71";
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
      // return hellosign.embedded.getSignUrl(signatureId);
      return response.signature_request
    })
    .then(function (response) {
      options.signerCarerID = uuid.v1();
      options.timestamp = new Date().toISOString();
      options.status = "created";
      options.carer_completed = false;
      options.signatureData = response;
      const params = {
        TableName: process.env.CONTRACT_DYNAMODB_TABLE,
        Item: options,
      };
      addContract(params)
    })
    .catch(function (err) {
      //catch error
      console.log("E01", err)
      callback(err, null)
    });

  function addContract(params) {
    
    dynamodb.put(params, (error) => {
      // handle potential errors
      if (error) {
        console.error(error);
        respHeaders["Content-Type"] = "text/plain";
        callback(null, {
          statusCode: error.statusCode || 501,
          headers: respHeaders,
          body: 'Couldn\'t create the carer.',
        });
        return;
      }
      const response = {
        statusCode: 200,
        headers: respHeaders,
        body: JSON.stringify(params.Item),
      };
      callback(null, response);
    });
  }
}