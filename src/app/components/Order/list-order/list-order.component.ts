import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/Services/order.service';
import { RequestOrders } from 'src/app/models/RequestOrders';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {

  orders: Array<Order>;
  requestOrders: RequestOrders;

  constructor(private service:OrderService, private router:Router) { }

  ngOnInit(): void {
    this.orders=[];
    this.requestOrders = this.createRequestOrder();
    this.service.getOrders(this.requestOrders)
    .subscribe(response => {
      this.orders=response.data;
      debugger;
    })
  }

  goHome(){
    this.router.navigate(["list-customer"]);
  }

  createRequestOrder(){
    let request:RequestOrders = new RequestOrders();
    let idCustomer = localStorage.getItem("id-customer");
    request.customerId = +idCustomer;
    var date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();
    let lastDay = new Date(month, year, 0).getDate();
    
    request.initialDate = new Date(year,month,1).toJSON();
    request.finalDate = new Date(year,month,lastDay).toJSON();
    return request; 
  }

  getDatail(order:Order){
    localStorage.setItem("id-order",order.id.toString());
    this.router.navigate(["detail-order"]);
  }

}
