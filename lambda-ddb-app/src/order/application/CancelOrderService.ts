/* eslint-disable no-console */
import AttendanceSaveRequest from './interface/IPlaceOrder';
import OrderDynamodbRepository from "../infra/OrderDynamodbRepository";
import OrderRepository from "../domain/OrderRepository";
import OrderRequest from "./interface/IPlaceOrder";
import ICancelOrder from "./interface/ICancelOrder";

export default class PlaceOrderService {

	private orderRepository: OrderRepository = new OrderDynamodbRepository();

	public async cancelOrder(cancleOrder:ICancelOrder): Promise<string> {
		throw new Error("개발중")
	}
}