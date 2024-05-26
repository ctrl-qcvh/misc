// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

// Set the region
AWS.config.update({region: 'us-west-2'}); // Change to your region

// Create the DynamoDB service object
const dynamoDB = new AWS.DynamoDB.DocumentClient();

// Define the data you want to send
const data = {
    TableName: 'ctrl_H_UserData',
    Item: {
        'PrimaryKey': 'PrimaryKeyValue', // Replace with your primary key
        'Attribute1': 'Value1',
        'Attribute2': 'Value2',
        'Attribute3': 'Value3'
        // Add more attributes as needed
    }
};
// Function to put the item into DynamoDB
const putItem = async () => {
    try {
        const result = await dynamoDB.put(data).promise();
        console.log("Data successfully added to DynamoDB:", result);
    } catch (error) {
        console.error("Error adding data to DynamoDB:", error);
    }
};
l
// Call the function to put item
putItem();




////////////node ctrlHAWS_.js