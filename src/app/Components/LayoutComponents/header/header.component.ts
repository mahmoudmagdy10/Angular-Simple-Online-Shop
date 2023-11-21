import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { CartService } from 'src/app/Services/Cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLogin : boolean = false;
  numOfCartItems : number = 0;

  constructor(private _auth : AuthService, private _CartService : CartService)
  {

    _CartService.numOfCartItems.subscribe({

      next:(val)=> {
        this.numOfCartItems = val;
      }
    });
    _auth.userData.subscribe({
      next:() => {
        if(_auth.userData.getValue() != null){
          this.isLogin = true;
        }
        else{
          this.isLogin = false;
        }
      }
    })
  }

  logOut(){
    this._auth.logOut();
  }

}
