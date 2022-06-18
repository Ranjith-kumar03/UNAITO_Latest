import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let authService = this.injector.get( AuthService)
    let token_Headers:any
    if(authService.getloggedIn()){
      token_Headers = request.clone({
     setHeaders:{
       Authorization: authService.getToken()
     }
    })
  }else{
    token_Headers = request.clone({
      setHeaders:{
        Authorization: 'no token'
      }
     })
  }
    return next.handle(token_Headers);
  }
}
