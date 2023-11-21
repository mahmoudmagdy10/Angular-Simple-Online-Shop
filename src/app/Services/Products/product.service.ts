import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient : HttpClient) { }

  getProducts() : Observable<any> {
    return this._httpClient.get('https://route-ecommerce.onrender.com/api/v1/products');
  }
  getProductById(id:any) : Observable<any> {
    return this._httpClient.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`);
  }
  getCategories() : Observable<any> {
    return this._httpClient.get(`https://route-ecommerce.onrender.com/api/v1/categories`);
  }
}
