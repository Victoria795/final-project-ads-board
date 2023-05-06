import { Injectable, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/i-user';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = '/api/Account';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  private _isLogginedSubject: BehaviorSubject<boolean>;
  public isLoggined$:Observable<boolean>;
  
  constructor(private _http: HttpClient, public router: Router, public _messageService:MessageService) {
    this._isLogginedSubject = new BehaviorSubject<boolean>(this.isLoggined);
    this.isLoggined$ = this._isLogginedSubject.asObservable();
  }
  // Регистрация
  register(user: IUser) {
    const body = {
      login: user.login,
      password: user.password,
      email: user.name
    }
    return this._http
    .post(`${this.endpoint}/register`, body)
  }
  // Вход
  logIn(user: IUser) {
    return this._http
      .post<any>(`${this.endpoint}/login`, user)
      .subscribe((res: string) => {
        localStorage.setItem('access_token', res);
        this._isLogginedSubject.next(true);
        this._messageService.add({severity: 'success', summary: 'Вы успешно авторизовались'});
      });    
  }
  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggined():boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  //Выход
  logOut() {
      let removeToken = localStorage.removeItem('access_token');
      this._isLogginedSubject.next(false);
      if (removeToken == null) {
        this.router.navigate(['']);
    }
  }
}
