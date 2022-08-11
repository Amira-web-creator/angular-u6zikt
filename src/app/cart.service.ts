import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from './products';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  items:Product[] = [];

  addToCart(product:Product){

    this.items.push(product);
  
  }

  getproducts(){

    return this.items;
  }

  clearCart (){

    this.items = [];
    return this.items;
  }


  getshippingprice(){

    return this.http.get<{type:string , price:number} []>
    ('/assets/shipping.json');


  }



  constructor(private http:HttpClient) { }

  
}
