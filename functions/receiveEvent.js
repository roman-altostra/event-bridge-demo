module.exports.handler = async (event, context) => {
  console.log("lambda was triggered by event bridge");
  console.log(JSON.stringify(event, null, 2));
  return {
    isBase64Encoded: false,
    statusCode: 200,
    headers: {},
    multiValueHeaders: {},
    body: ""
  }
}