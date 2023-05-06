import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILoading } from 'src/app/shared/interfaces/i-loading';
import { SearchService } from 'src/app/core/services/search.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { ICategory } from 'src/app/shared/interfaces/i-category';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  sortOptions:any = [];
  value:any = this.searchService.value;
  item:any = false;
  
  public loading$ = new BehaviorSubject<ILoading>({
    isLoading: true,
    ads: []
  })

  public skeleton = new Array(20);
  categories!:any;

  constructor(public searchService: SearchService,
              private _categoryService: CategoryService) {}

  public ngOnInit(): void {

    this._categoryService.getCategories()
    .subscribe((response) => {
    this.categories = response;
    console.log(this.categories)
    })
  
    this.loading$.next({
         isLoading: false,
         ads: this.searchService.transformedArray
     })
    this.sortOptions = [
      { name: 'новизне' },
      { name: 'дороже' },
      { name: 'дешевле' },
  ];
  }
}
