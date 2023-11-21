import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private httpClient : HttpClient) { }

  getAll() : Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.API_URL}/product`);
  }

  getByCatId(id : number) : Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.API_URL}/product/getByCatId/${id}`);
  }
}
