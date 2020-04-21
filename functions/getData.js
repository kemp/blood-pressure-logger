const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    
    let data = await ddb.scan({
        TableName: 'blood-pressure'
    }).promise();
    
    return {
        statusCode: 200,
        body: JSON.stringify(data),
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };
};
