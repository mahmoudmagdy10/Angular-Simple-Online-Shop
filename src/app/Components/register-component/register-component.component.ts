import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent {

  isLoding : boolean = false;
  constructor(private _auth : AuthService,
              private router : Router
    ){
      if(localStorage.getItem('userToken') !== null){
        this.router.navigate(['/Home']);
      }
    }

  registerForm : FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    rePassword: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^01[125][0-9]{8}$/)]),
  }, {validators : this.rePasswordMatch});

  rePasswordMatch(registerForm : any){
    let password = registerForm.get('password');
    let rePassword = registerForm.get('rePassword');

    if(password?.value === rePassword?.value){
      return null;
    }
    else
    {
      rePassword?.setErrors({passwordMatch : 'Password and rePassword not Match '});
      return {passwordMatch : 'Password and rePassword not Match'};
    }
  }
  handelForm(registerForm : FormGroup){
    if(registerForm.valid)
    {
      console.log(registerForm.value);
      this.isLoding = true;
      this._auth.register(registerForm.value).subscribe({
        next:(res)=>{
          if(res.status === 'Success'){
            this.router.navigate(['/LogIn'])
            console.log(this.registerForm);
          }
          console.log(res);
        },
        error : (err) => {
          this.isLoding = false;
          console.log(err);
        }
      })
    }
    
  }
}
