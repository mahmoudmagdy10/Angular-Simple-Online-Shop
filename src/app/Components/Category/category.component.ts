import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/Category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  CatList:any[] = [];
  constructor(private _CategoryService : CategoryService){}

  ngOnInit(): void {
    this._CategoryService.getAllCats().subscribe({
      next:(res)=> {
        this.CatList = res.data;
        console.log(res.data);
        
      }
    })
  }

}
