const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
// Set the region 
AWS.config.update({region: 'eu-west-1'});
const config = require('./config')


module.exports = (to, subject, bodyText, bodyHtml) => {
  bodyHtml = bodyHtml || bodyText;
  return new Promise((resolve, reject) => {
        var params = {
          Destination: {
            ToAddresses: [to],
          },
          Message: {
            Body: {
              Text: {
                Data: bodyText,
              },
              Html: {
                Data: bodyHtml,
              },
            },
            Subject: {
              Data: subject,   
            },
          },
          Source: config.EMAIL_SENDER,   // TODO: get from config
        };
        var ses = new AWS.SES();

        ses.sendEmail(params, (err, data) => {
            if (err) reject(err);
          else resolve(data);
        });
    });
};