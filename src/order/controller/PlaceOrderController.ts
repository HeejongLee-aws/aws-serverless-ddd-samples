import PlaceOrderService from "../application/PlaceOrderService";


export default class PlaceOrderController {
	
	private placeOrderService: PlaceOrderService = new PlaceOrderService();


	public async placeOrder():Promise<string> {
		return this.placeOrderService.placeOrder({
			id: "aaa"
		});
	}
}