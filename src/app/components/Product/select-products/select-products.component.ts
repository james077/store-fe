import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { OrderDetail } from 'src/app/models/OrderDetail';
import { CustomerService } from 'src/app/Services/customer.service';
import { Customer } from 'src/app/models/Customer';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/Services/order.service';
import { generalConstants } from 'src/app/constants/general-constants';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { messages } from 'src/app/constants/messages';

@Component({
  selector: 'app-select-products',
  templateUrl: './select-products.component.html',
  styleUrls: ['./select-products.component.css']
})
export class SelectProductsComponent implements OnInit {

  products: Product[];
  orderDetails: OrderDetail[];
  units: number = 0;
  idCustomer: number;
  complementaryForm: FormGroup;
  modal: boolean = false;
  tittle: string = "";
  message: string = "<sdasds";

  constructor(
    private service:ProductService, 
    private serviceCustomer:CustomerService,
    private serviceOrder:OrderService,  
    private router:Router)
    {
      this.complementaryForm = this.createForms();
    }

  

  ngOnInit(): void {
    this.orderDetails = [];
    this.idCustomer = +localStorage.getItem("id-customer");
    this.service.getProductsByCustomer(this.idCustomer)
    .subscribe(productResponse => {
      this.products=productResponse.data;
    })
  }

  createForms(){
    return new FormGroup({
      address: new FormControl ('', [Validators.required])   
    });
  }

  save(){
    if(this.complementaryForm.valid && this.units > 0){
      let order: Order =new Order();
      let customerDto: Customer = new Customer(); 
      
      customerDto.id = this.idCustomer;
      order.customer = customerDto;
      order.deliveryAddress = this.complementaryForm.get('address').value;
      order.orderDetails = this.orderDetails;
      this.serviceOrder.createOrder(order)
      .subscribe(response => {
        this.router.navigate(["/list-order"]); 
      });
    }else{
      alert(messages.obligatory_field + " y " +messages.minimum_quantity);
    }
    
  }

  addItem(product:Product){
    if(generalConstants.minimunQuantity > product.units || product.units == null){
      alert(messages.minimum_quantity);
    }
    if(generalConstants.maximunQuantity >= (this.units + product.units)){
      this.units += product.units;
      let orderDetail: OrderDetail = new OrderDetail();
      orderDetail.quantity = +product.units;
      orderDetail.product = product;
      this.orderDetails.push(orderDetail);
      alert(messages.success_save + " Tiene "+ this.units + " en total ");
    }else{
      alert(messages.maximum_quantity+this.units);
    }
  }

  deleteItem(product:Product){
    this.orderDetails.forEach(orderDetail => {
      if(orderDetail.product.id == product.id){
        this.units -= orderDetail.product.units;
      }
    });
    this.orderDetails = this.orderDetails.filter(l => l.product.id !=  product.id);
    product.units=null;
    alert(messages.success_delete);
  }

  goHome(){
    this.router.navigate(["home"]);
  }
  
  get address(){return this.complementaryForm.get('address')}
}
