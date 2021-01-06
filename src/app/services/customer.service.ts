import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUri } from '../constants/constants-api-url';
import { ApiResponse } from '../models/ApiResponse';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url: string;

  constructor(private http:HttpClient) { 
    this.url = apiUri.urlStore+apiUri.customer;
  }

  getCustomers(){
    return this.http.get<ApiResponse<Customer[]>>(this.url);
  }

  getCustomerId(id:number){
    return this.http.get<ApiResponse<Customer>>(this.url+"/"+id);
  }
}
