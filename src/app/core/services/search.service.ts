import { EventEmitter, Injectable } from '@angular/core';
import { AdvertService } from './advert.service';
import { IAd } from 'src/app/shared/interfaces/i-ad';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

changeDetectionEmitter: EventEmitter<void> = new EventEmitter<void>();

public transformedArray:IAd[] | undefined;
public searchTerm:string = '';
public categoryId:string = '';

constructor(private _advertService:AdvertService){}

public search(){
    this._advertService.getAdverts().subscribe(
      (res) => {
      this.transformedArray = res.reverse().filter(advert => {
          return advert.name.toLowerCase().includes(this.searchTerm.toLowerCase());
        })
      this.changeDetectionEmitter.emit();
      }
    )
  }
  
public filterByCategory(category:any){
  this._advertService.getAdvertByCategory(category.id).subscribe(
    (res) => {
    this.transformedArray = res;
    this.searchTerm = category.name;
    this.changeDetectionEmitter.emit();
    }
    )
}
}
