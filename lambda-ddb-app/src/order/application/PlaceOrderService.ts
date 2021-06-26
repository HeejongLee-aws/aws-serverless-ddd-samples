/* eslint-disable no-console */
import AttendanceSaveRequest from './interface/AttendanceSaveRequest';
import OrderDynamodbRepository from "../infra/OrderDynamodbRepository";
import OrderRepository from "../domain/OrderRepository";

export default class PlaceOrderService {

	private orderRepository: OrderRepository = new OrderDynamodbRepository();
	
	
	public async save(orderRequest:AttendanceSaveRequest): Promise<string> {
		throw new Error("개발중")
	}
	
}