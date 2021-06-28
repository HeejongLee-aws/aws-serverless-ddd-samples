import 'mocha';
import { expect } from 'chai';
import Order from "../../../order/domain/Order";
import OrderDynamoDbRepository from "../../../order/infra/OrderDynamoDbRepository";

describe('FindByUserId.spec.ts Test suite', function() {
    
    it('나의 주문을 조회한다.', async() => {
        const repository = new OrderDynamoDbRepository();
        const orders = await repository.findByUserId('heejong');
    });

});
