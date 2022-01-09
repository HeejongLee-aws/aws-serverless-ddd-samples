import IOrderLine from "./interface/IOrderLine";


export default class OrderLine {

    private productId: string
    private productName: string

    constructor(orderLine:IOrderLine) {
        this.productId = orderLine.productId;
        this.productName = orderLine.productName;
    }
}

