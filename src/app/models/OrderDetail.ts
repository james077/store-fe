import { Product } from './Product';
import { Order } from './Order';

export class OrderDetail{
    id: number;
    productDescription: string;
    price: number;
    order: Order;
    quantity: number;
    product: Product;

    toJSON() {
        return {
          id: this.id,
          product_description: this.productDescription,
          price: this.price,
          order: this.order,
          quantity: this.quantity,
          product: this.product
        };
    }
}