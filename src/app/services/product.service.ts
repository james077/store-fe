import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUri } from '../constants/constants-api-url';
import { Product } from '../models/Product';
import { ApiResponse } from '../models/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string;

  constructor(private http:HttpClient) { 
    this.url = apiUri.urlStore+apiUri.product;
  }

  getProductsByCustomer(id:number){
    return this.http.get<ApiResponse<Product[]>>(this.url+apiUri.available+"/"+id);
  }
  
  getProductId(id:number){
    return this.http.get<ApiResponse<Product>>(this.url+"/"+id);
  }

}
