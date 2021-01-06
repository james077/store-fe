import { Customer } from './Customer';
import { OrderDetail } from './OrderDetail';

export class RequestOrders{

    customerId: number;
    initialDate: string;
    finalDate: string;

    toJSON() {
        return {
          customer_id: this.customerId,
          initial_date: this.initialDate,
          final_date: this.finalDate
        }
    }
}