import Order from "./Order";

export default interface OrderRepository {

	save(order:Order): Promise<string>;
	get(userId:string, orderNo:string): Promise<Order>;
	findByUserId(userId:string): Promise<Array<Order>>;
	findByOrderDate(orderDate:string): Promise<Array<Order>>;
}