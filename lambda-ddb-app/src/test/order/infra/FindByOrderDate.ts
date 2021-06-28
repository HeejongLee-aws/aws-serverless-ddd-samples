import 'mocha';
import { expect } from 'chai';
import Order from "../../../order/domain/Order";
import OrderDynamoDbRepository from "../../../order/infra/OrderDynamoDbRepository";

describe('FindByOrderDate.spec.ts Test suite', function() {

    it('해당 날짜 시간에 주문을 가져 온다.', async() => {
        const repository = new OrderDynamoDbRepository();
        const orders = await repository.findByOrderDate('20220627092214')

        console.log(orders);
    });
});
