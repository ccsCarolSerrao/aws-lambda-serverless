const AWS = require('aws-sdk')

exports.handler = (event) =>{
    const lambda = new AWS.Lambda()

    console.log(lambda.listFunctions())
}