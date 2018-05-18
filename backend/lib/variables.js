let BASELINE_URL = ""

if (process.env.IS_OFFLINE) {
    var BASELINE_URL= 'http://localhost:' + process.env.DYNAMODB_LOCAL_PORT
  } else {
    var BASELINE_URL= 'http://edyn.care'
  }
  
  module.exports = BASELINE_URL;