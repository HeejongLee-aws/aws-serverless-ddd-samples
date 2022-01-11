import Order from '../domain/Order';
import OrderRepository from '../domain/OrderRepository';
import aws, {DynamoDB} from "aws-sdk";
import AWSXRay from "aws-xray-sdk";
import "dotenv/config";
import IOrder from "../domain/interface/IOrder";
import {DocumentClient} from "aws-sdk/lib/dynamodb/document_client";
const tableName = String(process.env.LOCAL_TEST ? "OrderTable" : process.env.OrderTable)

const AWS = AWSXRay.captureAWS(aws);

export const createDynamoDB = ():DynamoDB => {
    if (process.env.AWS_SAM_LOCAL) {
        return new AWS.DynamoDB({region: "localhost" , endpoint: "http://dynamo-local:8000"})

    } else if (process.env.LOCAL_TEST){
        return new AWS.DynamoDB({region: "localhost", endpoint: "http://localhost:8000",
            accessKeyId: process.env.aws_access_key_id,
            secretAccessKey: process.env.aws_secret_access_key})
    } else {
        return new AWS.DynamoDB({region: "ap-northeast-2" });
    }
}

export const getDocumentClient = ():DocumentClient => {

    return new AWS.DynamoDB.DocumentClient(
        {
            service: createDynamoDB()
        });
}

export default class OrderDynamoDbRepository implements OrderRepository  {

    private docClient = getDocumentClient();

    public async save(order: Order): Promise<string> {
        const putItem = {
            "TableName": tableName,
            "Item": order,
        }
        const result = await this.docClient.put(putItem).promise();
        return order.getOrderNo();
    }


    public async get(userId:string, orderNo:string): Promise<Order> {
        const getItem = {
            TableName : 'Order',
            Key: {
                PK: userId,
                SK: orderNo
            }
        };

        const item = await this.docClient.get(getItem).promise();
        return new Order(<IOrder> item.Item);
    }


    public async findByUserId(userId: string): Promise<Array<Order>> {

        const queryItem = {
            TableName: 'Order',
            KeyConditionExpression: 'PK = :hkey',
            ExpressionAttributeValues: {
                ':hkey': userId,
            }
        };
        const item = await this.docClient.query(queryItem).promise();
        const orders = new Array<Order>();
        item.Items?.forEach(item => {
            orders.push( new Order(<IOrder> item) );
        })

        return orders;
    }

    public async findByOrderDate(orderDate: string): Promise<Array<Order>> {

        const queryItem = {
            TableName: 'Order',
            IndexName: 'orderDate',
            KeyConditionExpression: 'orderDate = :hkey',
            ExpressionAttributeValues: {
                ':hkey': orderDate,
            }
        };

        const item = await this.docClient.query(queryItem).promise();
        const orders = new Array<Order>();
        item.Items?.forEach(item => {
            orders.push( new Order(<IOrder> item) );
            orders.push( new Order(<IOrder> item) );
        })

        return orders;
    }

}