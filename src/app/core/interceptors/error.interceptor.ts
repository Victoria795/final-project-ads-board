import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _router: Router,
              private _messageService:MessageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((err) => {
        let errorMessage = '';
        if(err.status === 404){
          this._router.navigateByUrl('**');
        } else if (err.status === 400 || err.status === 500){
          this._messageService.add({severity: 'error', summary: 'Ошибка! Попробуйте еще раз'});
        } else {
          errorMessage = `Error Status: ${err.status} \n Message: ${err.message}`;
          this._messageService.add({severity: 'error', summary: errorMessage , detail: ''});
        }
        return throwError(err);
        })
    );
  }
}
