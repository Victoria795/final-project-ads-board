import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public mock = {
    name: 'Виктория',
    phone: '+79785905232',
    address: 'г.Севастополь',
    password: 'viktoria'
  }

  public getUserInfo():Observable<any> {
    return of(this.mock).pipe()
  } 

}
