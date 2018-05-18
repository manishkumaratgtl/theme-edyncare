'use strict';

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().toISOString();
  const careplan = JSON.parse(event.body);
  const respHeaders = {
    "Access-Control-Allow-Origin": "*" // Required for CORS support to work
  };

  careplan.CarePlanId = uuid.v1(); 
  careplan.CreatedDate = timestamp;
  careplan.UpdatedDate = timestamp;
  careplan.Status = 'Active'; 

  const CarePlanQuery = {
    TableName: process.env.CAREPLAN_DYNAMODB_TABLE,

    FilterExpression: "#yr = :yyyy",
    ExpressionAttributeNames: {
      "#yr": "ClientId"
    },
    ExpressionAttributeValues: {
      ":yyyy": careplan.ClientId
    }
  };

  dynamodb.scan(CarePlanQuery, function(err, data){
    if (err) {
      console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
      careplan.serial= data.Count+ 1
      
      if (data.Count> 0) {
        data.Items.forEach(function (item){
          if (item.serial=== data.Count) {
            updateCarePlanStatus(item.CarePlanId, "Superseeded")
          }
        })
      }
      addCarePlan()
    }
  }
)

  function updateCarePlanStatus(Id, newStatus) {
    var paramsUpdate = {
      TableName: process.env.CAREPLAN_DYNAMODB_TABLE,
      Key: {
          "CarePlanId": Id
      },
    
      UpdateExpression: 'SET #Field = :Input', 
      ExpressionAttributeNames: { 
          '#Field' : 'Status'
      },
      ExpressionAttributeValues: { 
          ':Input': newStatus
      }
    }

    dynamodb.update(paramsUpdate, (error)=> {
      if (error) {
        console.error(error);
      }
    }
  );
}

  const params = {
    TableName: process.env.CAREPLAN_DYNAMODB_TABLE,
    Item: careplan,
  };

  function addCarePlan() {
    dynamodb.put(params, (error) => {
      // handle potential errors
      if (error) {
        console.error(error);
        respHeaders["Content-Type"] = "text/plain";
        callback(null, {
          statusCode: error.statusCode || 501,
          headers: respHeaders,
          body: 'Couldn\'t create the careplan.',
        });
        return;
      }

      // create a response
      const response = {
        statusCode: 200,
        headers: respHeaders,
        body: JSON.stringify(params.Item),
      };
      callback(null, response);
    });
  }
}
