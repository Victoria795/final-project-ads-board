import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IAd } from 'src/app/interfaces/i-ad';
import { IFullAd } from 'src/app/interfaces/i-full-ad';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  endpoint: string = '/api/Advert';

  constructor( private _http: HttpClient, private _messageService:MessageService) { }

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
      imageUrl: 'https://automobile-zip.ru/wp-content/uploads/8/1/c/81ca46ea233676020ba3a99d920c5dee.jpeg',
      price: advert.price,
      address: advert.address
    }
    return this._http.post<any>(`${this.endpoint}`, body)
}
}
