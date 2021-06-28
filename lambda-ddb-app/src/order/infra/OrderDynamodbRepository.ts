import Order from '../domain/Order';
import OrderRepository from '../domain/OrderRepository';
import aws, {DynamoDB} from "aws-sdk";
import {DocumentClient} from "aws-sdk/clients/dynamodb";
import "dotenv/config";
import IOrder from "../domain/interface/IOrder";
const tableName = String(process.env.LOCAL_TEST ? "Order" : process.env.ORDER_TABLE)

export const getDynamoDB = ():DynamoDB => {
    if (process.env.AWS_SAM_LOCAL) {
        return new DynamoDB({region: "localhost" , endpoint: "http://dynamo-local:8000"})

    } else if (process.env.LOCAL_TEST){
        return new DynamoDB({region: "localhost", endpoint: "http://localhost:8000",
            accessKeyId: process.env.aws_access_key_id,
            secretAccessKey: process.env.aws_secret_access_key})
    } else {
        return new DynamoDB({region: "ap-northeast-2" })
    }
}

export const getDocumentClient = ():DocumentClient => {
    return new aws.DynamoDB.DocumentClient(
        {
            service: getDynamoDB()
        });
}

export default class OrderDynamoDbRepository implements OrderRepository  {

    private docClient = getDocumentClient();

    public async save(order: Order): Promise<string> {
        throw new Error("not implemented");
    }


    public async get(userId:string, orderNo:string): Promise<Order> {

        throw new Error("not implemented");
    }


    public async findByUserId(userId: string): Promise<Array<Order>> {

        throw new Error("not implemented");
    }

    public async findByOrderDate(orderDate: string): Promise<Array<Order>> {

        throw new Error("not implemented");
    }

}