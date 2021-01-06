import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUri } from '../constants/constants-api-url';
import {map} from 'rxjs/operators';
import { ApiResponse } from '../models/ApiResponse';
import { Order } from '../models/Order';
import { RequestOrders } from '../models/RequestOrders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url: string;

  constructor(private http:HttpClient) { 
    this.url = apiUri.urlStore+apiUri.order;
  }

  getOrders(requestOrders:RequestOrders){
    return this.http.post<ApiResponse<Order[]>>(this.url,requestOrders);
  }
  
  createOrder(order:Order){
    return this.http.post<ApiResponse<Number>>(this.url+apiUri.save, order);
  }

  getOrderId(id:number){
    return this.http.get<ApiResponse<Order>>(this.url+"/"+id)
    .pipe(map((result: ApiResponse<any>) => {
      const order: Order = new Order();   
      order.id = result.data.id;
      order.customer = result.data.customer;
      order.creationDate = result.data.creation_date;
      order.deliveryAddress = result.data.delivery_address;
      order.total = result.data.total;
      order.orderDetails = result.data.order_details;
      return order; 
    }));
  }
}
