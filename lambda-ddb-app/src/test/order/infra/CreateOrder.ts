import 'mocha';
import { expect } from 'chai';
import Order from "../../../order/domain/Order";
import OrderDynamoDbRepository from "../../../order/infra/OrderDynamoDbRepository";

describe('CreateOrder.spec.ts Test suite', function() {
    
    it('2개의 주문을 저장한다.', async() => {
        const order1 = new Order(
            {
                    orderNo: '01',
                    userId: 'heejong',
                    orderer : { name: "이희종" },
                    orderLines: [
                        { productId: '01', productName: "복숭아",  },
                        { productId: '02', productName: "사과",  }
                    ],
                    totalAmount: { amount: 200 }
                }
        );

        const order2 = new Order(
            {
                orderNo: '02',
                userId: 'heejong',
                orderer : { name: "이희종" },
                orderLines: [ 
                    {   productId: '01', productName: "복숭아",},
                    {   productId: '02', productName: "사과",}
                ],
                totalAmount: { amount: 200 }
            }
        );

        const repository = new OrderDynamoDbRepository();

        const orderNo1 = await repository.save(order1);
        const orderNo2 = await repository.save(order2);

    });

});
