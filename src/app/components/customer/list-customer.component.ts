import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: Customer[];

  constructor(private service:CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.service.getCustomers()
    .subscribe(customerResponse => {
      this.customers=customerResponse.data;
    })
  }


  GoHome(){
    this.router.navigate(["home"]);
  }

  getOrders(customer:Customer){
    localStorage.setItem("id-customer",customer.id.toString());
    this.router.navigate(["list-order"]);
  }

  createOrder(customer:Customer){
    localStorage.setItem("id-customer",customer.id.toString());
    this.router.navigate(["select-products"]);
  }
}
