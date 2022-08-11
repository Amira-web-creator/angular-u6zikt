import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import { Product } from '../products';
import {CartService} from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  product:Product | undefined ;

  items = this.cartService.getproducts();
  checkOutForm = this.formBuilder.group({

    name:'',
    adress:'',

  })

  onSubmit():void{

    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkOutForm.value);
    this.checkOutForm.reset();

  }

  constructor(private cartService:CartService , private formBuilder:FormBuilder) { 

  }



  ngOnInit(): void {

  }

}
