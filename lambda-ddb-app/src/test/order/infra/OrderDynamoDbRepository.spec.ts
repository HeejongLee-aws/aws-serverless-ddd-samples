import 'mocha';
import { expect } from 'chai';
import Order from "../../../order/domain/Order";
import OrderDynamoDbRepository from "../../../order/infra/OrderDynamoDbRepository";

describe('OrderDynamoDbRepository.spec.ts Test suite', function() {
    
    it('2개의 주문을 저장한다.', async() => {
        const order1 = new Order(
            {
                    orderNo: '01',
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


    it('저장된 주문을 가져온다.', async() => {
        const repository = new OrderDynamoDbRepository();
        const order = await repository.get('이희종', '01');
    });


    it('나의 주문을 조회한다.', async() => {
        const repository = new OrderDynamoDbRepository();
        const orders = await repository.findByOrdererName('이희종');
    });

});
