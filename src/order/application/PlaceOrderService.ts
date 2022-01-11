/* eslint-disable no-console */
import AttendanceSaveRequest from './interface/IPlaceOrder';
import OrderDynamodbRepository from "../infra/OrderDynamodbRepository";
import OrderRepository from "../domain/OrderRepository";
import IPlaceOrder from "./interface/IPlaceOrder";
import Order from "../domain/Order";

export default class PlaceOrderService {

	private orderRepository: OrderRepository = new OrderDynamodbRepository();

	public async placeOrder(orderRequest:IPlaceOrder): Promise<string> {

		const order = new Order(
			{
				orderNo: '04',
				userId: 'heejong',
				orderer : { name: "이희종" },
				orderLines: [
					{   productId: '01', productName: "복숭아",},
					{   productId: '02', productName: "사과",}
				],
				totalAmount: { amount: 200 },
				orderDate:'20220628092214'
			}
		);

		await this.orderRepository.save(order);
		return "success";
	}
	
}