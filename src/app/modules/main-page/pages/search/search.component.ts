import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILoading } from 'src/app/shared/interfaces/i-loading';
import { SearchService } from 'src/app/core/services/search.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { ICategory } from 'src/app/shared/interfaces/i-category';
import { AdvertService } from 'src/app/core/services/advert.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit{


  public minPrice:number | null = null;
  public maxPrice:number | null = null;
  public sortOptions:any = [];
  public selectedItem: number | null = null;
  public loading$ = new BehaviorSubject<ILoading>({
    isLoading: true,
    ads: []
  })
  skeleton = new Array(20);
  categories!:any;

  constructor(public searchService: SearchService,
              private _categoryService: CategoryService) {}
   
  public filterByPrice(minPrice: any,maxPrice: any){
  this.searchService.transformedArray = this.searchService.transformedArray.filter(advert => {
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





