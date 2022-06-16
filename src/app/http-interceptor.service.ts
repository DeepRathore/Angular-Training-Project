import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });

    // return next.handle(req);
    return next.handle(tokenizedReq)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = 'Something went wrong, Please try again later';
        console.log(errorMsg);
        return throwError(`${errorMsg} - Error: ${error.message}`);
      })
      )
  }

}
