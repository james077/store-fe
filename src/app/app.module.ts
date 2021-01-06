import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ProductService } from './Services/product.service'
import { HttpClientModule} from '@angular/common/http';
import { SelectProductsComponent } from './components/Product/select-products/select-products.component';
import { ListCustomerComponent } from './components/customer/list-customer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListOrderComponent } from './components/Order/list-order/list-order.component';
import { DetailOrderComponent } from './components/Order/detail-order/detail-order.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ListCustomerComponent,
    SelectProductsComponent,
    NavbarComponent,
    ListOrderComponent,
    DetailOrderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule 
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
