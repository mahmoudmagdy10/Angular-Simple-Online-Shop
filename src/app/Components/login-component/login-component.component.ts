import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  apiError : string = '';
  isLoding : boolean = false;
  constructor(private _auth : AuthService,
              private router : Router
    ){

      if(localStorage.getItem('userToken') !== null){
        this.router.navigate(['/Home']);
      }
    }

  logInForm : FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
  });

  handelForm(logInForm : FormGroup){
    if(logInForm.valid)
    {
      console.log(logInForm);
      this.isLoding = true;
      this._auth.login(logInForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          if(res.message === 'success'){
            localStorage.setItem("userToken", res.token);
            this._auth.decodedUserData();
            this.router.navigate(['/Home'])
          }
          console.log(res);
        },
        error : (err) => {
          this.isLoding = false;
          this.apiError = "error";
          console.log(err)
        }
      })
    }
    
  }

}
