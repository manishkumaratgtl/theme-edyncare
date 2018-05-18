'use strict';

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');
const config = require('./../../../lib/config');
const user = require('./../../../lib/user');
const email = require('./../../../lib/email');

process.env['BASELINE_URL'] = 'http://localhost:3000';

module.exports.update = (event, context, callback) => {

  const updated = JSON.parse(event.body);
  console.log("updated", updated)

  var params = {
    TableName: process.env.CLIENT_DYNAMODB_TABLE,
    Key: {
      Id: updated.Id,
    },
    UpdateExpression: "set #Field = :Input, #updatedDate = :dateValue",
    ExpressionAttributeNames: {
      "#Field": "Status",
      "#updatedDate": "UpdatedDate"
    },
    ExpressionAttributeValues: {
      ":Input": updated.Status,
      ":dateValue": new Date().toISOString()
    },
    ReturnValues: 'ALL_NEW', // optional (NONE | ALL_OLD | UPDATED_OLD | ALL_NEW | UPDATED_NEW)
  };

  const respHeaders = {
    "Access-Control-Allow-Origin": "*" // Required for CORS support to work
  };
  //TODO: Perform schema validation here;
  // fetch todo from the database

  dynamodb.update(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      respHeaders["Content-Type"] = "text/plain";
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: respHeaders,
        body: 'Couldn\'t update the client.',
      });
      return;
    }

    if (!error) {
      // create a response
      const response = {
        statusCode: 200,
        headers: respHeaders,
        body: JSON.stringify(result.Attributes)
      };

      const updated = result.Attributes;
      // Handler to trigger next stages
      switch (updated.Status) {
        case "Approved":
          scheduleCareConsulation(updated);
          break;
        case "Rejected":
          //scheduleCareConsulation(updated.Email, updated.Id);
          break;
      };
      callback(null, response);
    } else {
      respHeaders["Content-Type"] = "text/plain";
      const response = {
        statusCode: 404,
        headers: respHeaders,
        body: 'Specified carer not found.'
      };
      callback(null, response);
    }
  });

  const scheduleCareConsulation = (updated) => {
    //Send link to carer to schedule an interview
    // Get carer.id
    // Send URL with "carer/interview-schedule/"+ {carer.id}
    const emailHeader = "EdynCare schedule care consultation"
    const name = updated.name.firstName + " " + updated.name.surname;
    const toEmail = updated.Email;
    const toId = updated.Id;
    const baseUrl = config.BASEURL;
    const emailContent = " \
      Dear " + name + ", \n\
      <br><br>\n\
      Thank you for completing our client on-boarding application. <br><br>\n\
      We would like to invite you to book a care consultation at a time convientint to you <br><br>\n\
      Please follow the link below to schedule your interview. <br><br>\n\
      " + baseUrl + "/care-consultation-schedule/" + toId + "\n\
      Best Regards,<br><br>\n\
      Team EdynCare\
      ";
    email(toEmail, emailHeader, emailContent)
      .then(() => {
        console.log("Email sent successfully.");
        //callback(null, response);
        createUser(toEmail, name, toId);
      })
      .catch((error) => {
        console.log("couldn't send the email.", error);
        createUser(toEmail, name, toId);
      })
  }

  /* SAMPLE IMPLEMENTATION OF USER CREATION */
  const createUser = (toEmail, name, id) => {
    return new Promise((resolve, reject) => {
      var password = uuid.v1().substring(0, 10);
      user.create(toEmail, password, 'client', id).then((res) => {
        //send email
        const emailHeader= "EdynCare-Carer crentials"
        const emailContent = " \
    Dear " + name + ", \n\
    <br><br>\n\
    Welcome aboard. <br><br>\n\
    Here are your crendentials for the EdynCare portal.\
    Username:" + toEmail + "\
    Password:" + password + "\
    <br><br>\n\
    Please update the password upon first login, don't anyone let know your password.\
    <br><br>\n\
    Best Regards,<br><br>\n\
    Team EdynCare\
    ";
        email(toEmail, emailHeader, emailContent)
          .then(() => {
            console.log("Email sent successfully. S01");
            //;
          })
          .catch((error) => {
            console.log("Couldn't send the email.", error);
            //;
          });
      }).catch((error) => {
        //
        console.log("Couldn't create carer user.", error);
      })
    });
  }
}