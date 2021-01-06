import { Customer } from './Customer';
import { OrderDetail } from './OrderDetail';

export class Order{
    id: number;
    customer: Customer;
    creationDate: string;
    deliveryAddress: string;
    orderDetails: OrderDetail[];
    total: number;

    toJSON() {
        return {
          id: this.id,
          customer: this.customer,
          creation_date: this.creationDate,
          delivery_address: this.deliveryAddress,
          order_details: this.orderDetails,
          total: this.total
        };
    }
}