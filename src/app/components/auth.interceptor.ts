import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor( private service:AuthService ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.service.getToken();

    if(token){
     const cloned = request.clone({
      setHeaders: { Authorization: `Bearer ${token}`}
     });
     return next.handle(cloned);
    }
    return next.handle(request);
  }
}
