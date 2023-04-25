import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IAd } from 'src/app/interfaces/i-ad';
import { IFullAd } from 'src/app/interfaces/i-full-ad';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  endpoint: string = '/api/Advert';

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
      categoryId: 'ff1737cc-67a1-4c2c-b9f4-9603465c1633',
      imageUrl: 'https://sportishka.com/uploads/posts/2021-12/1639134195_33-sportishka-com-p-mashini-raznikh-marok-sport-krasivo-foto-34.jpg',
      price: advert.price,
      address: advert.address
    }
    return this._http.post<any>(`${this.endpoint}`, body).subscribe();
  }
}
