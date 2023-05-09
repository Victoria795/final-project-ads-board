import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SearchService } from 'src/app/core/services/search.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { IAd } from 'src/app/shared/interfaces/i-ad';
import { Observable, map } from 'rxjs';
import { ICategory } from 'src/app/shared/interfaces/i-category';
import { TreeNode } from 'primeng/api';
import { AdvertService } from 'src/app/core/services/advert.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  public minPrice!:number;
  public maxPrice!:number;
  public sortOptions:Array<object> = [];
  public skeleton = new Array(20);
  public categories$!:Observable<any>;
  public ads: IAd[] | undefined;
  public searchTerm: string | undefined;
  public selectedCategory!: TreeNode;

  constructor(private _searchService: SearchService,
              private _categoryService: CategoryService,
              private _cdr: ChangeDetectorRef,
              private _advertService: AdvertService) {}
   
  public filterByPrice(minPrice: number,maxPrice: number){
  this.ads = this._searchService.transformedArray?.filter(advert => {
    return advert.price >= minPrice
        && advert.price <= maxPrice
  })
  
  }

  public filterByOptions(value:any){
  switch(value.name){
    case 'новизне':
    this.ads?.sort((min, max) => new Date(max.createdAt).getTime() - new Date(min.createdAt).getTime()
    );
    break;
    case 'сначала старые':
    this.ads?.sort((min, max) => new Date(min.createdAt).getTime() - new Date(max.createdAt).getTime()
    );
    break;
    case 'дешевле':
    this.ads?.sort((min, max) => min.price - max.price);
    break;
    case 'дороже':
    this.ads?.sort((min, max) => max.price - min.price);
    break;
  }
  console.log(value);
  
  }

  private transformCategories(categories: ICategory[]): TreeNode[] {
    const transformedCategories: TreeNode[] = [];
    categories.forEach((category) => {
      const node: TreeNode = {
        key: category.id,
        label: category.name,
        selectable: true,
      };

      if (category.child) {
        node.children = this.transformCategories(category.child);
      }

      transformedCategories.push(node);
    });

    return transformedCategories;
  }

  public selectCategory(){
  if(this.selectedCategory.key !== undefined){
    this._advertService.getAdvertByCategory(this.selectedCategory.key).subscribe(
      (res) => {
        this.ads = res
        this._cdr.detectChanges
      }
    )
  }
  }

  public ngOnInit(): void {

    this._searchService.changeDetectionEmitter.subscribe(
      () => {
        this.searchTerm = this._searchService.searchTerm
        this.ads = this._searchService.transformedArray
        this._cdr.detectChanges
      }
    )
    
    this.categories$ = this._categoryService.getCategories().pipe(
      map((categories:ICategory[]) => this.transformCategories(categories)
    )
    );
 
    this.sortOptions = [
      { name: 'новизне' },
      { name: 'сначала старые' },
      { name: 'дешевле' },
      { name: 'дороже' }
  ];
  }
  }








