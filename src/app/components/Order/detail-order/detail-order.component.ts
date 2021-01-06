import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/Services/order.service';
import { RequestOrders } from 'src/app/models/RequestOrders';
import { getLocaleDateFormat } from '@angular/common';
import { OrderDetail } from 'src/app/models/OrderDetail';

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.css']
})
export class DetailOrderComponent implements OnInit {

  order: Order;

  constructor(private service:OrderService, private router:Router) { }

  ngOnInit(): void {
    this.order = new Order;
    this.order.id = +localStorage.getItem("id-order");
    this.service.getOrderId(this.order.id)
    .subscribe(response => {
      this.order = response;
      debugger;
    });
  }

 

  goHome(){
    this.router.navigate(["list-order"]);
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
