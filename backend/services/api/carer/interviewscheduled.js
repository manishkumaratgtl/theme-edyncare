'use strict';

const uuid = require('uuid');
const dynamodb = require('./../../../lib/dynamodb');

module.exports.interviewScheduled = (event, context, callback) => {
    const timestamp = new Date().toISOString();
    const hookData = JSON.parse(event.body);
    const respHeaders = {
        "Access-Control-Allow-Origin": "*" // Required for CORS support to work
    };
    //TODO: Perform schema validation here;


    const params = {
        TableName: process.env.CARER_DYNAMODB_TABLE,
        IndexName: 'Email-Index',
        KeyConditionExpression: 'Email = :email',
        ExpressionAttributeValues: {
            ':email': hookData.payload.invitee.email
        }
    };

    dynamodb.query(params, (error, result) => {
        // handle potential errors
        if (error) {
            console.error(error);
            respHeaders["Content-Type"] = "text/plain";
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: respHeaders,
                body: 'Couldn\'t fetch the carer.',
            });
            return;
        }

        if (result.Items && result.Items.length > 0) {
            var interviewSchedule = {};
            interviewSchedule.CarerId = result.Items[0].Id;
            interviewSchedule.StartTime = hookData.payload.event.start_time;
            interviewSchedule.EndTime = hookData.payload.event.end_time;
            interviewSchedule.Email = hookData.payload.invitee.email;
            interviewSchedule.CreatedDate = timestamp;

            const carerInterviewSchedulesParam = {
                TableName: process.env.CARER_INTERVIEW_SCHEDULE_DYNAMODB_TABLE,
                Item: interviewSchedule,
            };
            
            dynamodb.put(carerInterviewSchedulesParam, (error) => {
                // handle potential errors
                if (error) {
                    console.error(error);
                    respHeaders["Content-Type"] = "text/plain";
                    callback(null, {
                        statusCode: error.statusCode || 501,
                        headers: respHeaders,
                        body: 'Couldn\'t create the carer interview schedules.',
                    });
                    return;
                }

                // create a response
                const response = {
                    statusCode: 200,
                    headers: respHeaders,
                    body: JSON.stringify(carerInterviewSchedulesParam.Item),
                };
                callback(null, response);
            });
        }
        else {
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
