import { Injectable } from '@angular/core';
import {Product} from "./products";
import {HttpClient, HttpClientModule} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  addToCart(product: Product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  constructor(
      private http: HttpClient
  ) {
  }

  getShippingPrice(){
    return this.http.get<{type: string, price: number}[] > ('/assets/shipping.json')
  }

}