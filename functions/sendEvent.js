module.exports.handler = async (event, context) => {
  exports.handler = async function handler() {
    const AWS = require('aws-sdk')
    AWS.config.region = process.env.AWS_REGION || 'us-east-1'
    const params = {
      Entries: [{
        Source: 'myTest',
        EventBusName: process.env.EXTERN_MYBUS01 || 'default',
        DetailType: 'transaction23',
        Time: new Date(),
        Detail: {
          "key": "value"
        }
      }]
    }
    const eventBridge = new AWS.EventBridge()
    const result = await eventBridge.putEvents(params).promise()
    console.log(result)
  };

  return {
    isBase64Encoded: false,
    statusCode: 200,
    headers: {},
    multiValueHeaders: {},
    body: ""
  }
}