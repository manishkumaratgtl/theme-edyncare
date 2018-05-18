'use strict';

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');
const email = require('./../../../lib/email');

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().toISOString();
  const carer = JSON.parse(event.body);
  const respHeaders = {
    "Access-Control-Allow-Origin": "*" // Required for CORS support to work
  };
  //TODO: Perform schema validation here;

  carer.Id = uuid.v1(); // Assing new id
  carer.Status = 'Onboarding'; // Set status which defaults to "Onboarding"
  carer.RegistrationDate = timestamp;
  carer.UpdatedDate = timestamp;
  carer.Email = carer.Email.toLowerCase()
  const params = {
    TableName: process.env.CARER_DYNAMODB_TABLE,
    Item: carer,
  };

  const EmailQuery = {
    TableName: process.env.CARER_DYNAMODB_TABLE,

    FilterExpression: "#yr = :yyyy",
    ExpressionAttributeNames: {
      "#yr": "Email"
    },
    ExpressionAttributeValues: {
      ":yyyy": carer.Email
    }
  };

  dynamodb.scan(EmailQuery, function (err, data) {
    if (err) {
      console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
      if (data.Count > 0) {
        data.Items.forEach(function (item) {
          if (item.Email === carer.Email) {
            respHeaders["Content-Type"] = "text/plain";
            callback(null, {
              statusCode: 401,
              headers: respHeaders,
              body: 'Carer already exists.',
            });
            return;
          } else {
            addCarer()
          }
        })
      } else {
        addCarer()
      }
    }
  });

  function addCarer() {
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

      // create a response
      const response = {
        statusCode: 200,
        headers: respHeaders,
        body: JSON.stringify(params.Item),
      };
      appliedEmail(carer.Email, carer.name.firstName)
      callback(null, response);
    });
  }

  const appliedEmail= (toEmail, toName)=> {
    const emailHeader= "Thank you for applying to Edyn Care"
    const emailContent = " \
      Dear " + toName + ", \n\
      <br><br>\n\
      Thank you so much for completing our questionnaire. \n\
      We’ll have a read through and if your level of experience and your responses are in alignment with what we have in mind we’ll be in touch to book you in for an interview.  \n\
      <br><br>\n\
      Kind regards,<br><br>\n\
      Oliver Ross<br>\n\
      Co-founder\n\
      ";
    email(toEmail, emailHeader, emailContent)
      .then(() => {
        console.log("Email sent successfully. S01");
      })
      .catch((error) => {
        console.log("Couldn't send the email. E01", error);
      })
  }
}
