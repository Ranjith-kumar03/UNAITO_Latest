import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIKEYInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    if(request.url)
    {
      /// some url bypass
    }
    let API_KEY_Request = request.clone({
      headers: request.headers.append(
        "API-KEY","USER-API-KEY"
      )
    })
    return next.handle(API_KEY_Request);
  }
}
