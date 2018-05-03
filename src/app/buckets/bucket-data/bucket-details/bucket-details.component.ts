import {Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Params } from '@angular/router';

import {Bucket} from '../../bucket.model';
import * as fromApp from '../../../store/app.reducers';
import * as fromBucket from '../../store/bucket.reducers';
import * as fromFileObject from '../store/file-object.reducers';

@Component({
  selector: 'app-bucket-details',
  templateUrl: './bucket-details.component.html',
  styleUrls: ['./bucket-details.component.css']
})
export class BucketDetailsComponent implements OnInit {
  bucketState: Observable<fromBucket.State>;
  fileObjectState: Observable<fromFileObject.State>
  buckets: Bucket[];
  bucketId: string;
  bucketIndex: number;
  bucketStorageSize = 0;

  constructor( private store: Store<fromApp.AppState>,
               private route: ActivatedRoute ) { }

  ngOnInit() {

    // Subscribe to route params to get the BucketId
    this.route.params
      .subscribe(
        (params: Params) => {
          this.bucketId = params['id'];
          console.log('Getting the bucket Id');
        }
      );
    // Get the current bucket State
    this.bucketState = this.store.select('bucket');
    this.bucketState
      .subscribe(
        (buckets) => {
          console.log('This bucket index: ' + this.bucketIndex);
          this.buckets =  buckets.buckets.slice();
          this.bucketIndex = this.buckets.findIndex( bucket => bucket.id === this.bucketId);
          console.log('This bucket index: ' + this.bucketIndex);
        }
      );

    this.fileObjectState = this.store.select('fileObject');
    this.fileObjectState
      .subscribe(
        (fileObjects) => {
          for ( let i = 0; i < fileObjects.objects.length; i++ ) {
            this.bucketStorageSize += fileObjects.objects[i].size;
          }
        }
      );
  }

}
