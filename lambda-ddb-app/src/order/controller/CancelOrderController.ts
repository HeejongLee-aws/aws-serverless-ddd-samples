import PlaceOrderService from "../application/PlaceOrderService";
import SQSEvent from "./interface/AwsEvent";
import AttendanceSaveRequest from '../application/interface/IPlaceOrder';

export default class PlaceOrderController {
	
	private placeOrderService: PlaceOrderService = new PlaceOrderService();

}