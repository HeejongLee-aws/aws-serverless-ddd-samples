import 'mocha';
import { expect } from 'chai';
import Order from "../../../order/domain/Order";
import OrderDynamoDbRepository from "../../../order/infra/OrderDynamoDbRepository";

describe('OrderDynamoDbRepository.spec.ts Test suite', function() {
    
    it('주문을 저장한다.', async() => {

        const order = new Order(
            {
                    orderNo: '01',
                    orderer : {
                        name: "이희종"
                    },
                    orderLines: [
                        {
                            productId: '01',
                            productName: "복숭아",
                        },
                        {
                            productId: '02',
                            productName: "복숭아",
                        }
                    ],
                    totalAmount: {
                        amount: 200
                    }
                }
            );

            const repository = new OrderDynamoDbRepository();
            const orderNo = await repository.save(order);
    });
});
