import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ProductList : IProduct[] = [];

  constructor() { 

    this.ProductList = [
      {id : 1 , price : 9000,  name : 'Dell Latitude', quantity : 4, catId : 1},
      {id : 2 , price : 6000,  name : 'hp', quantity : 3, catId : 1},
      {id : 3 , price : 88000, name : 'MAC', quantity : 6, catId : 1},
      {id : 4 , price : 7000 , name : 'Sonny', quantity : 5, catId : 3},
      {id : 5 , price : 34000, name : 'SamSung', quantity : 3, catId : 3},
      {id : 6 , price : 23000, name : 'IPhone 13', quantity : 4, catId : 2},
      {id : 7 , price : 24000, name : 'SamSung Smart', quantity : 6, catId : 2},
      {id : 8 , price : 4000 , name : 'Realme 6', quantity : 3, catId : 2},
    ]
  }

  getAll(){
    return this.ProductList;
  }

  getById(pId : number)  {
    return this.ProductList.find((prd) => prd.id == pId);
  }

  getByCatId(selCatId : number) : IProduct[] {
    return this.ProductList.filter((pro) => {return pro.catId == selCatId});
  }
}
