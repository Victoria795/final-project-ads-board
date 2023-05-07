import { Injectable } from '@angular/core';
import { AdvertService } from './advert.service';
import { IAd } from 'src/app/shared/interfaces/i-ad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  transformedArray:IAd[] | undefined;
  searchTerm:string = '';

}
