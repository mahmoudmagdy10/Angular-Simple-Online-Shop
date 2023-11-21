import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/Auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {

    if (localStorage.getItem('userToken') !== null) {
      return true;
    } else {
      this.router.navigate(['/LogIn']);
      return false;
    }

  }
}
