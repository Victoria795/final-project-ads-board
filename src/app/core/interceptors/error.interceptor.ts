import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _messageService: MessageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((err) => {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
          errorMessage = `Error: ${err.error.message}`;
          this._messageService.add({severity: 'error', summary: errorMessage , detail: ''});
        } else {
          errorMessage = `Error Status: ${err.status} \n Message: ${err.message}`;
          this._messageService.add({severity: 'error', summary: errorMessage , detail: ''});
        }
        console.log(errorMessage);
        return throwError(err);
        })
    );
  }
}
