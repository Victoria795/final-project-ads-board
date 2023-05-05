import { Injectable } from '@angular/core';
import { AdvertService } from './advert.service';
import { FilterService } from 'primeng/api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  transformedArray:any = [];
  value:string = '';

  constructor(private _advertService:AdvertService,
              private _filterService:FilterService,
              private _router:Router) { }

  searchAdverts(){
    this._advertService.getAdverts()
    .subscribe((response) => {
    for(let item of response){
    if(this._filterService.filters.contains(item.name, this.value)){
    this.transformedArray.push(item);
    }
    }
    console.log(this.transformedArray)
    return this.transformedArray
  })
}
}
