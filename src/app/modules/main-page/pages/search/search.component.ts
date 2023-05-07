import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/services/search.service';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit{

  public minPrice!:number;
  public maxPrice!:number;
  public sortOptions:Array<object> = [];
  public selectedItem: number | null = null;
  public skeleton = new Array(20);
  public categories!:any;

  constructor(public searchService: SearchService,
              private _categoryService: CategoryService) {}
   
  public filterByPrice(minPrice: number,maxPrice: number){
  this.searchService.transformedArray = this.searchService.transformedArray?.filter(advert => {
    return advert.price >= minPrice
        && advert.price <= maxPrice
  })
  }

  public ngOnInit(): void {

    this._categoryService.getCategories()
    .subscribe((response) => {
    this.categories = response;
    console.log(this.categories)
    })

    this.sortOptions = [
      { name: 'новизне' },
      { name: 'дороже' },
      { name: 'дешевле' },
  ];
  }
}





