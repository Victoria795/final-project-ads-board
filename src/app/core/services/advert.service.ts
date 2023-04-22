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

  createAdvert(advert: any){
    const body = {
      name: advert.name,
      description: advert.description,
      categoryId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      imageUrl: advert.images,
      price: advert.price,
      address: advert.address
    }
    return this._http.post(`${this.endpoint}`, body)
  }
}
