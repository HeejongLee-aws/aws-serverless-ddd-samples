import IAttendance from "./interface/IOrder";
import IOrder from "./interface/IOrder";
import OrderLine from "./OrderLine";
import OrderState from "./OrderState";
import Money from "./Money";
import Orderer from "./Orderer";

export default class Order {
	private PK: string;
	private SK: string;

	private orderNo: string;				// 주문 번호
	private orderer: Orderer;				// 주문자

	private state: OrderState;				// 주문 상태
	private totalAmount: Money;				// 총 주문 금액
	private oderLines: Array<OrderLine>		// 주문 상품

	constructor(order: IOrder) {
	}

	public changeShipped(): void {
	}

	public changeShippingInfo(): void {
	}

	public cancel():void {
	}
}