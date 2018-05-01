import { Component, OnInit } from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';

import * as fromBucket from '../store/bucket.reducers';
import * as fromApp from '../../store/app.reducers';
import * as BucketActions from '../store/bucket.actions';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css']
})
export class BucketListComponent implements OnInit {

  bucketState: Observable<fromBucket.State>;

  constructor( private store: Store<fromApp.AppState>,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
    // 1. Fetch buckets from Server to populate
    this.store.dispatch(new BucketActions.FetchBuckets);
    this.bucketState = this.store.select('bucket');

  }

  onSelectRow( bucketId: string) {
    this.router.navigate([bucketId], {relativeTo: this.route} );
  }

}
