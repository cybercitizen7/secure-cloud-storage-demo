import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BucketsModule} from './buckets/buckets.module';
import {AppRoutingModule} from './app-routing.module';
import {StoreModule} from '@ngrx/store';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {reducers} from './store/app.reducers';
import {EffectsModule} from '@ngrx/effects';
import {BucketEffects} from './buckets/store/bucket.effects';
import {AuthInterceptor} from './shared/auth.interceptor';
import {FileObjectEffects} from './buckets/bucket-data/store/file-object.effects';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BucketsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([BucketEffects, FileObjectEffects])
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
