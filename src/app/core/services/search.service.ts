import { Injectable } from '@angular/core';
import { AdvertService } from './advert.service';
import { FilterService } from 'primeng/api';
import { IAd } from 'src/app/shared/interfaces/i-ad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  transformedArray:IAd[] = [];
  value:string = '';

  constructor(private _advertService:AdvertService,
              private _filterService:FilterService) { }

  searchAdverts(){
    this._advertService.getAdverts()
    .subscribe((response) => {
    for(let item of response.reverse()){
    if(this._filterService.filters.contains(item.name, this.value)){
    this.transformedArray.push(item);
    }
    }
    console.log(this.transformedArray)
    return this.transformedArray
  })
  }
}
