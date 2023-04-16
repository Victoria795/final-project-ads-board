import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';
import { ICategory } from 'src/app/interfaces/i-category';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit{
  @Input() public isFilterOpened: boolean = false;

  categories:ICategory[] = [];
  selectedCategory:any
  
  constructor(private readonly Categoryservice: CategoryService){
  }
  
  ngOnInit():void {
    this.Categoryservice.getCategories()
    .subscribe((response) => {
      this.categories = response;
    }
    )
  }
  selectCategory(category: any){
    this.selectedCategory = category
  }
}