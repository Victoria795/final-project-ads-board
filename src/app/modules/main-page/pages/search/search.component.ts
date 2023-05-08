import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SearchService } from 'src/app/core/services/search.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { IAd } from 'src/app/shared/interfaces/i-ad';

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
  public ads: IAd[] | undefined;
  public searchTerm: string | undefined;

  constructor(private _searchService: SearchService,
              private _categoryService: CategoryService,
              private _cdr: ChangeDetectorRef) {}
   
  public filterByPrice(minPrice: number,maxPrice: number){
  this.ads = this._searchService.transformedArray?.filter(advert => {
    return advert.price >= minPrice
        && advert.price <= maxPrice
  })
  }

  public ngOnInit(): void {

    this._searchService.changeDetectionEmitter.subscribe(
      () => {
        this.searchTerm = this._searchService.searchTerm
        this.ads = this._searchService.transformedArray
        this._cdr.detectChanges
      }
    )

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





