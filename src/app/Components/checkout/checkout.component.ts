import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/Services/Cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  constructor(private _CartService : CartService){}
  shippingAddress : FormGroup = new FormGroup({
    details : new FormControl(null),
    phone : new FormControl(null),
    city : new FormControl(null)
  });

  navigateToPage(url : string){
    window.location.href = url;
  }
  handelSubmit(shippingAddress : FormGroup)
  {
    console.log(shippingAddress.value);
    this._CartService.onlinePayment(shippingAddress.value,"65581d031a189200346eb54e").subscribe({
      next:(res)=>{
        this.navigateToPage(res.session.url);
        console.log(res.session.url);
      },
      error:(err) => console.log(err)
    })
  }
}
