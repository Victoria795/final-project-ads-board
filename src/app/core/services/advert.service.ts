import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IAd } from 'src/app/interfaces/i-ad';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  endpoint: string = '/api/Advert';

  constructor( private _http: HttpClient) { }

  getAdverts():Observable<IAd[]>{
    return this._http.get<IAd[]>(`${this.endpoint}`)
   }
  
  getAdvertById(id:string):Observable<IAd>{
    return this._http.get<IAd>(`${this.endpoint}/`+ id)
  }

  createAdvert(advert: IAd):Observable<any>{
    return this._http.post(`${this.endpoint}`, advert)
  }
}
