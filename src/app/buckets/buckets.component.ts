import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromApp from '../store/app.reducers';
import * as fromBucket from './store/bucket.reducers';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-buckets',
  templateUrl: './buckets.component.html',
  styleUrls: ['./buckets.component.css']
})
export class BucketsComponent implements OnInit {
  showForm = false;
  bucketState: Observable<fromBucket.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.bucketState = this.store.select('bucket');

    this.bucketState.subscribe(
      (bucketState) => {
        this.showForm = !bucketState.newBucketAdded;
        console.log('Create new bucket subscription: ' + this.showForm);
      }
    );
  }

  onNewBucket() {
    this.showForm = true;
  }
}
