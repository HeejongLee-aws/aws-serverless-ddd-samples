import Money from "./Money";
import Orderer from "./Orderer";
import IOrder from "./interface/IOrder";
import OrderLine from "./OrderLine";
import OrderState from "./OrderState";

export default class Order {
	private PK: string;						// 파티션 키
	private SK: string;						// 정렬 키

	private userId: string;
	private orderNo: string;				// 주문 번호
	private orderer: Orderer;				// 주문자

	private state: OrderState;				// 주문 상태
	private totalAmount: Money;				// 총 주문 금액
	private orderLines: Array<OrderLine>	// 주문 상품

	private orderDate: string;

	constructor(order: IOrder) {
		this.PK = order.userId;
		this.userId = order.userId;
		this.SK = order.orderNo;
		this.orderNo = order.orderNo;
		this.orderer = new Orderer(order.orderer);
		this.totalAmount = new Money(order.totalAmount);
		this.orderLines = new Array<OrderLine>();
		order.orderLines.forEach( item => {
			this.orderLines.push(new OrderLine(item));
		});

		this.orderDate = order.orderDate;
	}

	public getOrderNo(): string {
		return this.orderNo;
	}

	public cancel():void {
	}
}