const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB.DocumentClient();

const DYNAMODB_TABLE_NAME = 'BloodPressureLogger';

exports.handler = async (event) => {
    
    let data = await ddb.scan({
        TableName: DYNAMODB_TABLE_NAME
    }).promise();
    
    return {
        statusCode: 200,
        body: JSON.stringify(data),
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };
};
