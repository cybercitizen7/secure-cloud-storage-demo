import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/switchMap';

import * as fromApp from '../store/app.reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<fromApp.AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

   return this.store.select('bucket')
      .switchMap( () => {
          const copiedReq = req.clone({
            setHeaders: {
              Authorization: `Bearer E3E91143-33B8-49F9-B494-8B0793191B83`,
            }});
          console.log('Intercepted ' + copiedReq.headers.get('Authorization'));
          return next.handle(copiedReq);
        });
  }

}
