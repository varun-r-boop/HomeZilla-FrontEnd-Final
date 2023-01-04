import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, take } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log("okkk");
    if (sessionStorage) {
        
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${sessionStorage.getItem("auth-user")}`,
        },
      });
    }

    return next.handle(request);
  }
}
