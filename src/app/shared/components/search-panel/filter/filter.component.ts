import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';
import { ICategory } from 'src/app/shared/interfaces/i-category';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  animations: [
    trigger('categoriesAnimation', [
      transition(':enter', [
        style({ height: '1px', opacity: 0 }),
        animate('300ms', style({ height: '850px', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ height: '1px', opacity: 0 })),
      ]),
    ]),
  ],

})
export class FilterComponent implements OnInit{

  categories!:ICategory[];
  selectedCategory: any;
  selCat: number | null = null;
  
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
