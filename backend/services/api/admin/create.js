'use strict';

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');
const email = require('./../../../lib/email');
const user = require('./../../../lib/user');

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().toISOString();
  const admin = JSON.parse(event.body);
  const respHeaders = {
    "Access-Control-Allow-Origin": "*" // Required for CORS support to work
  };
  //TODO: Perform schema validation here;

  admin.Id = uuid.v1(); // Assing new id
  admin.RegistrationDate = timestamp;
  admin.UpdatedDate = timestamp;
  admin.Email = admin.Email.toLowerCase()
  const params = {
    TableName: process.env.ADMIN_DYNAMODB_TABLE,
    Item: admin,
  };

  const EmailQuery = {
    TableName: process.env.ADMIN_DYNAMODB_TABLE,

    FilterExpression: "#yr = :yyyy",
    ExpressionAttributeNames: {
      "#yr": "Email"
    },
    ExpressionAttributeValues: {
      ":yyyy": admin.Email
    }
  };

  dynamodb.scan(EmailQuery, function (err, data) {
    if (err) {
      console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
      if (data.Count > 0) {
        data.Items.forEach(function (item) {
          if (item.Email === admin.Email) {
            respHeaders["Content-Type"] = "text/plain";
            callback(null, {
              statusCode: 401,
              headers: respHeaders,
              body: 'Admin already exists.',
            });
            return;
          } else {
            addAdmin()
          }
        })
      } else {
        addAdmin()
      }
    }
  });

  function addAdmin() {
    dynamodb.put(params, (error) => {
      // handle potential errors
      if (error) {
        console.error(error);
        respHeaders["Content-Type"] = "text/plain";
        callback(null, {
          statusCode: error.statusCode || 501,
          headers: respHeaders,
          body: 'Couldn\'t create the admin.',
        });
        return;
      }

      // create a response
      const response = {
        statusCode: 200,
        headers: respHeaders,
        body: JSON.stringify(params.Item),
      };
      createUser(admin.Email, admin.name, admin.Id)
      callback(null, response);
    });
  }

  const createUser = (toEmail, name, id) => {
    return new Promise((resolve, reject) => {
      var password = uuid.v1().substring(0, 10);
      user.create(toEmail, password, 'admin', id).then((res) => {
        const emailContent = " \
          Dear " + name.firstName+ name.surname + ", \n\
          \n\
          Welcome aboard. \n\
          Here are your crendentials for the EdynCare portal.\
          Username:" + toEmail + "\
          Password:" + password + "\
          <br><br>\n\
          Please update the password upon first login, don't anyone let know your password.\
          <br><br>\n\
          Best Regards,\n\
          Team EdynCare\
          ";
      email(toEmail, "EdynCare-Carer crentials", emailContent)
        .then(() => {
          console.log("Email sent successfully. S02");
        })
        .catch((error) => {
          console.log("Couldn't send the email. E02", error);
        });
    }).catch((error) => {
      console.log("couldn't create carer user. E12", error);
    })});
  }

}
