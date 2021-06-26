import Order from '../domain/Order';
import OrderRepository from '../domain/OrderRepository';

@injectable()
export default class OrderDynamodbRepository implements OrderRepository  {
    
    save(order: Order): Promise<string> {
        throw new Error('Method not implemented.');
    }
}