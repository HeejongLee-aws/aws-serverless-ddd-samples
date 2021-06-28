import IOrderer from "./IOrderer";
import IOrderLine from "./IOrderLine";
import IMoney from "./IMoney";

export default interface IOrder {
    orderLines: Array<IOrderLine>;
    totalAmount: IMoney;
    orderer: IOrderer;
    userId: string;
    orderNo: string;
}

