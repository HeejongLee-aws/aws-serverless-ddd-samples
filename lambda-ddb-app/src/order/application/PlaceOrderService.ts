/* eslint-disable no-console */
import AttendanceSaveRequest from './interface/IPlaceOrder';
import OrderDynamodbRepository from "../infra/OrderDynamodbRepository";
import OrderRepository from "../domain/OrderRepository";
import IPlaceOrder from "./interface/IPlaceOrder";

export default class PlaceOrderService {

	private orderRepository: OrderRepository = new OrderDynamodbRepository();

	public async placeOrder(orderCancel:IPlaceOrder): Promise<string> {

		// 주문번호를 생성한다.

		// 주문을 생성한다.

		// 저장한다.
	}
	
}