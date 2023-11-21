import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/Products/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  ProductId : any;
  ProductData : any;
  constructor(private _productService : ProductService, private _activatedRouter : ActivatedRoute){}

  ngOnInit(): void {
    this._activatedRouter.paramMap.subscribe((params) => {
      this.ProductId = params?.get('id')
    });

    this._productService.getProductById(this.ProductId).subscribe((res) => {
      this.ProductData = res.data;
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
}
