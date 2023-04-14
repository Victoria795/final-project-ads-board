import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IAd } from 'src/app/interfaces/i-ad';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  constructor( private _http: HttpClient) { }

  getAdverts():Observable<IAd[]>{
    return this._http.get<IAd[]>('/api/Advert')
   }
}
