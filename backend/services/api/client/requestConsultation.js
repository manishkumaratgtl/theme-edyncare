'use strict';

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');
const email = require('../../../lib/email');

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().toISOString();
  const consultationRequest = JSON.parse(event.body);
  const respHeaders = {
    "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
  };
  //TODO: Perform schema validation here;
  
  consultationRequest.Id = uuid.v1(); // Assing new id
  consultationRequest.requestDate = timestamp;

  const params = {
    TableName: process.env.CLIENT_CONSULTATION_REQUEST_DYNAMODB_TABLE,
    Item: consultationRequest,
  };

  // write the todo to the database
  dynamodb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      respHeaders["Content-Type"] = "text/plain";
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: respHeaders,
        body: 'Couldn\'t create the consultation request.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      headers: respHeaders,
      body: JSON.stringify(params.Item),
    };

    const toEmail = consultationRequest.Email;
    const emailContent = " \
    Dear " + consultationRequest.Name + ", \n\
    \n\
    Thank you for contacting us. We'll get in touch with you shortly. \n\
    \n\
    Best Regards,\n\
    Team EdynCare\
    ";
    email(toEmail, "EdynCare-Consultation request received", emailContent)
      .then(() => {
        console.log("Email sent successfully.");
        callback(null, response);
      })
      .catch((error) => {
        console.log("couldn't send the email.", error);
        callback(null, response);
      });
  });
}
