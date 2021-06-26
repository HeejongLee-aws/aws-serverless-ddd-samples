import PlaceOrderService from "../application/PlaceOrderService";
import SQSEvent from "./interface/AwsEvent";
import AttendanceSaveRequest from '../application/interface/AttendanceSaveRequest';

export default class PlaceOrderController {
	
	private placeOrderService: PlaceOrderService = new PlaceOrderService();

}