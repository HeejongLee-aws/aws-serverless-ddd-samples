import Order from "./Order";

export default interface OrderRepository {

	save(order:Order): Promise<string>;
	get(orderNo:string): Promise<Order>;
}