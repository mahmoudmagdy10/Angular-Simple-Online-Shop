import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData = new BehaviorSubject(null);
  constructor(private _httpClient : HttpClient, private _router : Router) 
  {
    if(localStorage.getItem('userToken') !== null)
    {
      this.decodedUserData();
    }

  }

  decodedUserData(){
    let encodedtoken = JSON.stringify( localStorage.getItem('userToken') );
    let decodedToken:any = jwtDecode(encodedtoken);
    console.log(decodedToken);
    this.userData.next(decodedToken);
    
  }
  register(registerObj : object) : Observable<any>{

    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, registerObj);
    // return this._httpClient.post(`${environment.API_URL}/Account/Register`, registerObj);
  }
  login(LoginObj : object) : Observable<any>{

    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, LoginObj);
  }

  logOut(){
    this.userData.next(null);
    localStorage.removeItem("userToken");
    this._router.navigate(['/LogIn']);
  
  }
  
}
