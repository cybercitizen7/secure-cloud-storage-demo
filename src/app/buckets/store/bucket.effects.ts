import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';

import * as BucketActions from './bucket.actions';
import {Bucket} from '../bucket.model';

@Injectable()
export class BucketEffects {
  @Effect()
  bucketsFetch = this.actions$
    .ofType(BucketActions.FETCH_BUCKETS)
    .switchMap(() => {
      console.log('Sending GET request to Server');
      return this.httpClient.get<Bucket[]>('https://challenge.3fs.si/storage/buckets', {
        observe: 'body',
        responseType: 'json'
      });
    })
    .map(
      (buckets) => {
        console.log('Receives bucket:' + buckets[0].id);
        return {
          type: BucketActions.SET_BUCKETS,
          payload: buckets
        };
      }
    );

  @Effect()
  bucketAdd = this.actions$
    .ofType(BucketActions.ADD_BUCKET)
    .map(
      (action: BucketActions.AddBucket) => {
        return {
          type: BucketActions.BUCKET_ADDED,
          payload: action.payload
        };
      }
    );
    // .switchMap((action: BucketActions.AddBucket) => {
    //   console.log('Sending POST request on Server');
    //   return this.httpClient.post('https://challenge.3fs.si/storage/buckets', action.payload);
    // });



  constructor( private actions$: Actions,
               private httpClient: HttpClient) {}
}
