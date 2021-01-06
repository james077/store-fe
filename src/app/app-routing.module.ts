import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectProductsComponent } from './components/Product/select-products/select-products.component';
import { ListCustomerComponent } from './components/customer/list-customer.component';
import { ListOrderComponent } from './components/Order/list-order/list-order.component';
import { DetailOrderComponent } from './components/Order/detail-order/detail-order.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'list-customer', component:ListCustomerComponent},
  {path:'select-products', component:SelectProductsComponent},
  {path:'list-order', component:ListOrderComponent},
  {path:'detail-order', component:DetailOrderComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
