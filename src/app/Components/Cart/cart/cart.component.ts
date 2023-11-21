import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/Cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  isLoding : boolean = false;
  CartData : any = null;
  constructor(private _cartService : CartService, private _router : Router){}

  ngOnInit(): void {
    this._cartService.getLoggedUserCart().subscribe({
      next: (res) => {
        this.CartData = res.data;

        console.log(res)
      },
      error: (err) => {
        console.log(err);
      }
      
    })
  }

  removeFromCart(productId : string)
  {
    this._cartService.removeProductFromCart(productId).subscribe({
      next: (res) => {
        this._cartService.numOfCartItems.next(res.numOfCartItems);
        this.CartData = res.data;
        console.log(res);
      },
      error: (err) => console.log(err),
    })

    
  }

  updateCartItem(productId : string, count : number){
    this.isLoding = true;
    this._cartService.updateCartItem(productId, count).subscribe({
      next: (res) => {
        this.isLoding = false;
        this.CartData = res.data;
        console.log(res);
      },
      error: (err) => {
        this.isLoding = false;
        console.log(err);
      },
    })

  }
}
