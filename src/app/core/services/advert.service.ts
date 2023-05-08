import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IAd } from 'src/app/shared/interfaces/i-ad';
import { IFullAd } from 'src/app/shared/interfaces/i-full-ad';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  private endpoint: string = '/api/Advert';

  constructor( private _http: HttpClient) { }

  getAdverts():Observable<IAd[]>{
    return this._http.get<IAd[]>(`${this.endpoint}`)
   }
  
  getAdvertById(id:string):Observable<IFullAd>{
    return this._http.get<IFullAd>(`${this.endpoint}/`+ id)
  }

  createAdvert(advert: any){
    const body = {
      name: advert.name,
      description: advert.description,
      categoryId: advert.category.id,
      imageUrl: advert.images,
      price: advert.price,
      address: advert.address
    }
    return this._http.post<any>(`${this.endpoint}`, body)
}
}
