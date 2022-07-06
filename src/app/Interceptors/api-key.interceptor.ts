import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class APIKEYInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log(" see the url from interceptor", request.url)
    if (request.url === environment.API_CREATE_NEWCUSTOMER) {
      let API_KEY_Request = request.clone({
        headers: request.headers.append("API-KEY", "CUSTOMER-API-KEY"),
      });
      return next.handle(API_KEY_Request);
    } else {
      let API_KEY_Request = request.clone({
        headers: request.headers.append("API-KEY", "USER-API-KEY"),
      });
      return next.handle(API_KEY_Request);
    }
  }
}
