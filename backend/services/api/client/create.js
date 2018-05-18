'use strict';

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');
const email = require('./../../../lib/email');

module.exports.create = (event, context, callback) => {

  const timestamp = new Date().toISOString();
  const client = JSON.parse(event.body);
  const respHeaders = {
    "Access-Control-Allow-Origin": "*" // Required for CORS support to work
  };
  //TODO: Perform schema validation here;

  var recipient = {name: {}};    
  recipient = client.recipient;
  
  let clientParams = { name: { firstName: '', surname: '' } };

  clientParams.Id = uuid.v1(); // Assing new id
  clientParams.Status = 'Onboarding'; // Set status which defaults to "Onboarding"
  clientParams.RegistrationDate = timestamp;
  clientParams.UpdatedDate = timestamp;
  clientParams.Email = client.Email.toLowerCase();
  clientParams.gender = client.gender;
  clientParams.name.firstName = client.name.firstName;
  clientParams.name.surname = client.name.surname;
  clientParams.dateOfBirth = client.dateOfBirth;
  clientParams.nationality = client.nationality;
  clientParams.phoneContact = client.phoneContact;
  clientParams.postCode = client.postCode;
  const paramsClient = {
    TableName: process.env.CLIENT_DYNAMODB_TABLE,
    Item: clientParams,
  };
  console.log(clientParams);
  const EmailQuery = {
    TableName: process.env.CLIENT_DYNAMODB_TABLE,

    FilterExpression: "#yr = :yyyy",
    ExpressionAttributeNames: {
      "#yr": "Email"
    },
    ExpressionAttributeValues: {
      ":yyyy": client.Email
    }
  };

  dynamodb.scan(EmailQuery, function (err, data) {
    if (err) {
      console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
      if (data.Count > 0) {
        data.Items.forEach(function (item) {
          if (item.Email === client.Email) {
            respHeaders["Content-Type"] = "application/json";
            return callback(null, {
              statusCode: 409,
              headers: respHeaders,
              body: JSON.stringify('Client already exists.'),
            });
          } else {
            addClient();
          }
        })
      } else {
        addClient();
      }
    }
  });

  function addClient() {
    dynamodb.put(paramsClient, (error) => {
      // handle potential errors
      if (error) {
        respHeaders["Content-Type"] = "text/json";
        callback(null, {
          statusCode: error.statusCode || 501,
          headers: respHeaders,
          //body: 'Couldn\'t create the client.',
          body: error.message,
        });
      }

      addRecipient(function (err) {
        if (err) {
          return callback(null, {
            statusCode: error.statusCode || 501,
            headers: respHeaders,
            body: 'Couldn\'t create the recipient.',
          });
        }
      });

      // create a response
      const response = {
        statusCode: 200,
        headers: respHeaders,
        body: JSON.stringify(paramsClient.Item),
      };
      callback(null, response);
    });
  }

  function addRecipient() {
    
    recipient = { name: { firstname: '',surname:'' } };
    recipient.Id = uuid.v1(); // Assing new id
    recipient.ClientId = clientParams.Id;
    recipient.careForClient = client.careForClient;
    
    if (client.careForClient === '0') {
      recipient.name.firstname = client.recipient.name.firstname;
      recipient.name.surname = client.recipient.name.surname;
      recipient.postCode = client.recipient.postCode;
      recipient.dateOfBirth = client.recipient.dateOfBirth;
      recipient.gender = client.recipient.gender;
      recipient.nationality = client.recipient.nationality;
    } else {
      recipient.name.firstname = client.name.firstName;
      recipient.name.surname = client.name.surname;
      recipient.postCode = client.postCode;
      recipient.dateOfBirth = client.dateOfBirth;
      recipient.gender = client.gender;
      recipient.nationality = client.nationality;
    }

    recipient.careNeeds = client.recipient.careNeeds;
    recipient.careServices = client.recipient.careServices;
    recipient.interests = client.recipient.interests;
    recipient.careTimes = client.recipient.careTimes;

    var params = {
      TableName: process.env.RECIPIENT_DYNAMODB_TABLE,
      Item: recipient,
    };
    
    dynamodb.put(params, (error) => {
      // handle potential errors
      if (error) {
        return error;
      } else {
        return client;
      }
    });
  }

}