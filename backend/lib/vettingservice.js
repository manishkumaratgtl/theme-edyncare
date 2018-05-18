'use strict';

var Onfido = require('onfido');
const config = require('./config')

const ONFIDO_TOKEN = config.ONFIDO_TOKEN;

var defaultClient = Onfido.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + ONFIDO_TOKEN;
Token.apiKeyPrefix = 'Token';

var api = new Onfido.DefaultApi();

module.exports.createApplicant = (userData) => {
    var opts = {
        'data': userData // Applicant | 
    };
    return new Promise((resolve, reject) => {
        //apiInstance.createApplicant(opts, callback);
        api.createApplicant(opts, function (err, data, response) {
            if (err) reject(error.response.body);
            else resolve(data);
        });
    });
}

module.exports.createCheck = (userData) => {
    var applicantId = "applicantId_example"; // String | 
    var opts = {
        'data': new Onfido.CheckCreationRequest() // CheckCreationRequest | 
    };
    return new Promise((resolve, reject) => {
        //apiInstance.createApplicant(opts, callback);
        api.createCheck(applicantId, opts, function (err, data, response) {
            if (err) reject(error.response.body);
            else resolve(data);
        });
    });
}

module.exports.create = (carerObj) => {
    // setting applicant details
    var applicant = new Onfido.Applicant();
    applicant.first_name = carerObj.name.firstName;
    applicant.last_name = carerObj.name.surname;
    applicant.dob = new Date(carerObj.dateOfBirth);
    applicant.email = carerObj.Email;
    applicant.gender = carerObj.gender;
    applicant.telephone = carerObj.phoneContact;
    applicant.country = 'GBR'; //should be shortend name

    var address = new Onfido.Address();
    address.building_number = carerObj.address.houseNumber; 
    address.street = carerObj.address.street; 
    address.town = carerObj.address.town;
    address.postcode = carerObj.address.postCode;
    address.country = 'GBR';

    applicant.addresses = [address];

    // setting check request details
    var check = new Onfido.CheckCreationRequest();
    check.type = 'standard';

    var report = new Onfido.Report();
    report.name = 'criminal_history';
    report.variant = "enhanced";
    report.options = [];
    var report2 = new Onfido.Report();
    report2.name = 'identity';
    check.reports = [report, report2];


    return new Promise((resolve, reject) => {
        api.createApplicant({ 'data': applicant }, function (error, applicantData, response) {
            if (error) {
                reject(error);
            } else {
                var applicantId = applicantData.id;
                api.createCheck(applicantId, { 'data': check }, function (error, checkData, response) {
                    if (error) {
                        reject(error);
                    } else {
                        const res = Object.assign(applicantData,checkData);
                        resolve(res);
                    }
                });
            }
        });
    });
}