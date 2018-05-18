'use strict';

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');
const config = require('./../../../lib/config');
const user = require('./../../../lib/user');
const interviewscheduled = require('./interviewscheduled');
const vettingservice = require('./../../../lib/vettingservice');
const contracts = require('./../../../lib/contracts');
const email = require('./../../../lib/email');

//process.env['BASELINE_URL'] = 'http://localhost:3000';

module.exports.update = (event, context, callback) => {

  const updated = JSON.parse(event.body);

  const params = {
    TableName: process.env.CARER_DYNAMODB_TABLE,
    Key: {
      Id: updated.Key.Id,
    },
    UpdateExpression: "set #Field = :Input",
    ExpressionAttributeNames: {
      "#Field": updated.ExpressionAttributeNames["#Field"]
    },
    ExpressionAttributeValues: {
        ":Input": updated.ExpressionAttributeValues[":Input"]
    },
    ReturnValues: 'ALL_NEW'
  };  

  const respHeaders = {
    "Access-Control-Allow-Origin" : "*" 
  };

  dynamodb.update(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      respHeaders["Content-Type"] = "text/plain";
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: respHeaders,
        body: 'Couldn\'t update the carer.',
      });
      return;
    }

    if (!error) {
      // create a response
      const response = {
        statusCode: 200,
        headers: respHeaders,
        body: JSON.stringify(params.Item)
      };

      const updated = result.Attributes;

      // Handler to trigger next stages
      switch (updated.Status) {
        case "P1- Pass":
          scheduleInterview(updated.Email, updated.name.firstName, updated.Id);
          break;
        case "P2- Pass":
          createUser(updated.Email, updated.name.firstName, updated.Id);
          break;
        case "P3- Pass":
          vetDocuments(updated);
          break;
        case "P4- Pass":
          sendContract(updated);
          break;
        case "P4- Pass":
          onboardingComplete();
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
}

const scheduleInterview = (toEmail, name, toId) => {
  //Send link to carer to schedule an interview
  // Get carer.id
  // Send URL with "carer/schedule-interview/"+ {carer.id}
  const applicationUrl = config.BASEURL;
  const emailHeader = "EdynCare application first-round successful"
  const emailContent = " \
    Dear " + name + ", \n\
    <br><br>\n\
    Thank you for completing our carer on-boarding application. <br><br>\n\
    We are delighted to inform you that you have passed the first round. <br><br>\n\
    We would like to invite you for an inperson interview with Rita, our Head of Care. <br><br>\n\
    Please follow the link below to schedule your interview. <br><br>\n\
    " + applicationUrl + "/carer/schedule-interview/" + toId + "\n\
    Best Regards,<br><br>\n\
    Team EdynCare\
    ";
  email(toEmail, emailHeader, emailContent)
    .then(() => {
      console.log("Email sent successfully. S01");
    })
    .catch((error) => {
      console.log("Couldn't send the email. E01", error);
    })
}

/* SAMPLE IMPLEMENTATION OF USER CREATION */
const createUser = (toEmail, name, id) => {
  return new Promise((resolve, reject) => {
    var password = uuid.v1().substring(0, 10);
    user.create(toEmail, password, 'carer', id).then((res) => {
      //send email
      const emailContent = " \
        Dear " + name + ", \n\
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
        //;
      })
      .catch((error) => {
        console.log("Couldn't send the email. E02", error);
        //;
      });
  }).catch((error) => {
    //
    console.log("couldn't create carer user. E12", error);
  })});
}

const vetDocuments= (updated)=> {
  console.log("vetDocuments")

  vettingservice.create(updated)
  .then((result)=> {
    console.log("Work fucntion worked. S03", result);
  })
  .catch((error)=> {
    console.log("Error. E03", error)
  });
}

const sendContract = (carer) => {
  console.log('api/carer/update/sendContract')

  const respHeaders = {
    "Access-Control-Allow-Origin": "*" // Required for CORS support to work
  };

  const signers = [{
    "email_address": carer.Email,
    "name": "First name Surname", // Todo change to name
    "role": "Carers"
  }]

  const contract = {
    "test_mode": 1,
    "clientId": "e5de7a08ba6825eb9a9003bdefa03a61", //HelloSign Id
    "template_id": "3ee2706d75e729da2de4719520ae50c2b0479c0c", //Contract Id eg. employment contract
    "subject": "Employment contract",
    "signers": signers,
  }
  
  contracts.create(contract)
  .then(function(response) {
    console.log('response', response)
    addContract(response)
  })
  .catch(function(err){
    console.log('Could\'t create the contract with HelloSign: err', err)
  })

  function addContract(options) {
    
    options.CarerId = carer.Id
    const params = {
      TableName: process.env.CONTRACT_DYNAMODB_TABLE,
      Item: options,
    }

    dynamodb.put(params, (err)=> {

      if (err) {
        console.error(error);
        respHeaders["Content-Type"] = "text/plain";
        callback(null, {
          statusCode: error.statusCode || 501,
          headers: respHeaders,
          body: 'Couldn\'t add the contract to the DB',
        });
        return 
      }
      const response = {
        statusCode: 200,
        header: respHeaders,
        body: JSON.stringify(params.Item)
      }
      console.log('Contract created from carer: response', response)
      //Todo, should i  have a callback here?
      //callback(null, response) 
    })
  }
}

const onboardingComplete = () => {
  console.log('api/carer/update/onboardingComplete')
}