import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';
import { ICategory } from 'src/app/shared/interfaces/i-category';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit{

  categories!:ICategory[];
  selectedCategory: any;
  
  constructor(private readonly _categoryService: CategoryService){
  }
  
  ngOnInit():void {
    this._categoryService.getCategories()
    .subscribe((response) => {
    this.categories = response;
    })
  }
  selectCategory(category: any){
    this.selectedCategory = category
  }
}
