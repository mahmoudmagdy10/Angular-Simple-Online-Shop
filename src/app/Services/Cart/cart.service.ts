import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  numOfCartItems  = new BehaviorSubject(0);
  
  headers : any = {
    token : localStorage.getItem('userToken')
  }

  constructor(private _HttpClient : HttpClient) 
  {
    this.getLoggedUserCart().subscribe({
      next:(res)=>{
        this.numOfCartItems.next(res.numOfCartItems);
        console.log(res);
      },
      error:(err)=>{console.log(err);}
    });

  }

  addCart(productId : string) : Observable<any> {

    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/cart`,
      {productId:productId},
    );
  }

  getLoggedUserCart() : Observable<any>
  {
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/cart`);

  }

  removeProductFromCart(productId : string) : Observable<any>
  {
    return this._HttpClient.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`);

  }

  updateCartItem(productId : string, count : number) : Observable<any>
  {
    return this._HttpClient.put(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,
      {count : count});

  }

  onlinePayment(shippingAddress : any, cartId : string) : Observable<any>
  {
    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {
        shippingAddress:shippingAddress
      });
  }


}
