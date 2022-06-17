import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderutilityService } from '../Loader/loaderutility.service';
import { catchError, finalize, tap } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private _loaderUtility: LoaderutilityService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(tap(event => {
      this._loaderUtility.loader.next(true)
      if (event.type == HttpEventType.Response) {
        console.log("see the event status", event.status)
        if (event.status != 0) {
          this._loaderUtility.loader.next(false)
        }
      }
    }), catchError(error => {
      this._loaderUtility.loader.next(false)
      console.log('error occured:', error);
      throw error;
    }), finalize(() => {
      this._loaderUtility.loader.next(false)
    }))
  }
}
