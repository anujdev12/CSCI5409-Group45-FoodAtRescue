const express = require("express");
const AWS = require('aws-sdk');
const uuid = require("uuid")
//const client = require("../../dynamoDBConnection");

const { DYNAMO_REGION, DYNAMO_KEY, DYNAMO_SECRET_KEY } = require('../../src/config/index');

AWS.config.update({
    region: DYNAMO_REGION,
    accessKeyId: DYNAMO_KEY,
    secretAccessKey: DYNAMO_SECRET_KEY,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'Food';


const getAllFood = async (req, res) => {
    try {
        const params = {
            TableName: TABLE_NAME,
        };
        const foods = await dynamoClient.scan(params).promise();
        //console.log(foods)
        return res.status(200).json({ message: "Food Details retrieved Successfully", success: true, data: foods });
        //return foods;
    } catch (error) {
        return res.status(500).json({ error: error.message, message: "Unable to get all Food Details!!", success: false });
    }

};

const addFood = async (req, res) => {
    try {
        const Item = { ...req.body };
        Item.id = uuid.v1();
        const params = {
            TableName: TABLE_NAME,
            Item: Item,
        };
        await dynamoClient.put(params).promise().then(() => {
            return res.status(201).json({ message: "Food Details Added Successfully", success: true });
        });
    } catch (error) {
        return res.status(500).json({ error: error.message, message: "Unable to Add Details!!", success: false });
    }
};

const deleteFood = async (req, res) => {
    try {

        const id = req.params.id;
        const params = {
            TableName: TABLE_NAME,
            Key: {
                id,
            },
        };
        const food = await dynamoClient.get(params).promise();
        const count = Object.keys(food).length;
        if (count == 0) {
            return res.status(404).json({ message: "Food Details not found!!", success: false });
        }

        await dynamoClient.delete(params).promise().then(() => {
            return res.status(200).json({ message: "Food Details Deleted Successfully", success: true });
        });
    } catch (error) {
        res.status(500).json({ error: error.message, message: "Unable to Delete!!", success: false });
    }
};

const getFood = async (req, res) => {
    try {
        const id = req.params.id;
        const params = {
            TableName: TABLE_NAME,
            Key: {
                id,
            },
        };
        const food = await dynamoClient.get(params).promise();

        //const item = JSON.stringify(food)
        //const { Items } = food;
        //console.log(food.Item.id);

        const count = Object.keys(food).length;
        //console.log(count)
        if (count == 0) {
            res.status(404).json({
                message: "No Food Details Available",
                success: false
            })
        } else {
            res.status(200).json({
                message: "Food Details Retrieved Successfully",
                success: true,
                data: food
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error!!",
            success: false,
            error: error.message
        })
    }
};

const updateFood = async (req, res) => {
    try {

        const id = req.params.id;
        const params = {
            TableName: TABLE_NAME,
            Key: {
                id,
            },
        };
        const food = await dynamoClient.get(params).promise();
        const count = Object.keys(food).length;
        if (count == 0) {
            return res.status(404).json({ message: "Food Details not found!!", success: false });
        }

        const Item = { ...req.body };
        Item.id = id;

        const param = {
            TableName: TABLE_NAME,
            Item: Item,
        };

        await dynamoClient.put(param).promise().then(() => {
            return res.status(201).json({ message: "Food Details Updated Successfully", success: true });
        });
    } catch (error) {
        return res.status(500).json({ error: error.message, message: "Unable to Update Details!!", success: false });
    }
};

const getMyFood = async (req, res) => {
    try {
        const customerId = req.params.customerId;
        const params = {
            TableName: TABLE_NAME,
            //KeyConditionExpression: "",
            //ProjectionExpression: 'customerId,ownerId,',
            FilterExpression: "customerId = :customerId ",
            ExpressionAttributeValues: {
                ":customerId": customerId,
            }
        };
        const myFood = await dynamoClient.scan(params).promise();

        const count = Object.keys(myFood).length;
        if (count == 0) {
            res.status(404).json({
                message: "No Reservation Details Available",
                success: false
            })
        } else {
            res.status(200).json({
                message: "Reservation Details Retrieved Successfully",
                success: true,
                data: myFood
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error!!",
            success: false,
            error: error.message
        })
    }
};

const getMyPosting = async (req, res) => {
    try {
        const ownerId = req.params.ownerId;
        const params = {
            TableName: TABLE_NAME,
            //KeyConditionExpression: "",
            //ProjectionExpression: 'customerId,ownerId,',
            FilterExpression: "ownerId = :ownerId ",
            ExpressionAttributeValues: {
                ":ownerId": ownerId,
            }
        };
        const myFood = await dynamoClient.scan(params).promise();
        //console.log(myFood);

        //const item = JSON.stringify(Reservation)
        //const { Items } = Reservation;
        //console.log(Reservation.Item.id);

        const count = Object.keys(myFood).length;
        if (count == 0) {
            res.status(404).json({
                message: "No post Details Available",
                success: false
            })
        } else {
            res.status(200).json({
                message: "Post Details Retrieved Successfully",
                success: true,
                data: myFood
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error!!",
            success: false,
            error: error.message
        })
    }
};

const getReservation = async (req, res) => {
    try {
        const ownerId = req.params.ownerId;
        const params = {
            TableName: TABLE_NAME,
            //KeyConditionExpression: "",
            //ProjectionExpression: 'customerId,ownerId,',
            FilterExpression: "ownerId = :ownerId AND foodStatus = :foodStatus",
            ExpressionAttributeValues: {
                ":ownerId": ownerId,
                ":foodStatus": "Reserved",
            }
        };
        const myFood = await dynamoClient.scan(params).promise();
        //console.log(myFood);

        //const item = JSON.stringify(Reservation)
        //const { Items } = Reservation;
        //console.log(Reservation.Item.id);

        const count = Object.keys(myFood).length;
        if (count == 0) {
            res.status(404).json({
                message: "No post Details Available",
                success: false
            })
        } else {
            res.status(200).json({
                message: "Post Details Retrieved Successfully",
                success: true,
                data: myFood
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error!!",
            success: false,
            error: error.message
        })
    }
};

module.exports = { getAllFood, addFood, deleteFood, getFood, updateFood, getMyFood, getMyPosting, getReservation };
