import { Component } from '@angular/core';
import { BrandService } from 'src/app/Services/Brands/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  BrandList:any[] = [];
  constructor(private _BrandService : BrandService){}

  ngOnInit(): void {
    this._BrandService.getAllBrands().subscribe({
      next:(res)=> {
        this.BrandList = res.data;
        console.log(res.data);
        
      }
    })
  }

}
