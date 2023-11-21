import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/Cart/cart.service';
import { ProductService } from 'src/app/Services/Products/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  SearchInput : string = '';
  ProductList : any[] = [];
  constructor(private _productSerive : ProductService, private _cartService : CartService){}

  ngOnInit(): void {
    
    this._productSerive.getProducts().subscribe({
      next: (res) => {
        this.ProductList = res.data;
      }
    });

  }

  addCart(productId:string){
    this._cartService.addCart(productId).subscribe({
      next:(res)=>{
        this._cartService.numOfCartItems.next(res.numOfCartItems);
        console.log(res);
      },
      error : (err) => console.log(err)
    })

  }


}
