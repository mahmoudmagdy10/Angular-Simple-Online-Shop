import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let token : any = localStorage.getItem('userToken');
    if (token) 
    {
      let updateRequest =  request.clone({
        headers : request.headers.set('token',token)
      });
      return next.handle(updateRequest);
    }
    return next.handle(request);  }
}
