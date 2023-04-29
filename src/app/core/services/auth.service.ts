import { Injectable, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/i-user';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = '/api/Account';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  private _isLogginedSubject: BehaviorSubject<boolean>;
  public isLoggined$:Observable<boolean>;
  
  constructor(private _http: HttpClient, public router: Router) {
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
    .pipe(catchError(this.handleError));
  }
  // Вход
  logIn(user: IUser) {
    return this._http
      .post<any>(`${this.endpoint}/login`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res);
        this._isLogginedSubject.next(true)
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
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg)
    return throwError(msg);
  }
}
