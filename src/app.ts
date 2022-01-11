import PlaceOrderController from "./order/controller/PlaceOrderController";

interface AwsResponse {
	statusCode: number;
	headers?: object;
	body: any;
}

exports.handler = async (event:any, context:any) => {
	
	console.log(event);
	const message = {value: "heejong"};

	const placeOrderController = new PlaceOrderController();
	await placeOrderController.placeOrder();

	const response = {
		statusCode: 200,
		body: JSON.stringify(message)
	};

	return  response;
}