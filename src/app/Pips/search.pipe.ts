import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../ViewModels/iproduct';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Products:any[], searchTerm:string): any[] {
    return Products.filter((product) => product.title.toLocaleLowerCase().includes(searchTerm));
  }

}
