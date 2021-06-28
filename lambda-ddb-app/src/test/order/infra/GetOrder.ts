import 'mocha';
import { expect } from 'chai';
import Order from "../../../order/domain/Order";
import OrderDynamoDbRepository from "../../../order/infra/OrderDynamoDbRepository";

describe('GetOrder.spec.ts Test suite', function() {
    
    it('나의 주문을 가져온다.', async() => {
        const repository = new OrderDynamoDbRepository();
        const order = await repository.get('heejong', '01');
    });
});
