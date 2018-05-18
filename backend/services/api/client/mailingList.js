'use strict';

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');
const email = require('../../../lib/email');


module.exports.create = (event, context, callback) => {
    const timestamp = new Date().toISOString();
    const mailingListBody = JSON.parse(event.body);

    mailingListBody.requestDate = timestamp;

    const respHeaders = {
      "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
    };
    
    // create a response
    const response = {
        statusCode: 200,
        headers: respHeaders,
        body: JSON.stringify(mailingListBody),
      };
  
    const toEmail = mailingListBody.contactEmail;
    const emailContent = " \
    Dear " + mailingListBody.name + ", \n\
    \n\
    Thank you for contacting us. We'll get in touch with you shortly. \n\
    \n\
    Best Regards,\n\
    Oliver and Team edyn.care\
    ";
    email(toEmail, "EdynCare-mailing list joined", emailContent)
    .then(() => {
        console.log("Email sent successfully.");
        callback(null, response);
    })
    .catch((error) => {
        console.log("Couldn't send the email.", error);
        callback(null, error);
    });

    const toEmailInternal = "oliver@edyn.care"
    const emailContentInternal = " \
    New mailing list joiner \n\
    \n\
    Name: "+ mailingListBody.name + " \n\
    Care is for: "+ mailingListBody.careIsFor + " \n\
    Contact email "+ mailingListBody.contactEmail + " \n\
    Timestamp "+ mailingListBody.requestDate + " \n\
    "
    email(toEmailInternal, "EdynCare-mailing list joined", emailContentInternal)
    .then(() => {
        console.log("Email sent successfully.");
        callback(null, response);
    })
    .catch((error) => {
        console.log("Couldn't send the email.", error);
        callback(null, error);
    });
  }
  