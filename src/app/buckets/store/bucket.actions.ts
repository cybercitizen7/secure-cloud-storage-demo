import {Action} from '@ngrx/store';
import {Bucket} from '../bucket.model';

export const FETCH_BUCKETS = 'FETCH_BUCKETS';
export const SET_BUCKETS = 'SET_BUCKETS';
export const ADD_BUCKET = 'ADD_BUCKET';
export const BUCKET_ADDED = 'BUCKET_ADDED';
export const DELETE_BUCKET = 'DELETE_BUCKET';
export const BUCKET_DELETED = 'BUCKET_DELETED';

export class FetchBuckets implements Action {
  readonly type = FETCH_BUCKETS;
}

export class SetBuckets implements Action {
  readonly type = SET_BUCKETS;

  constructor( public payload: Bucket[] ) {}
}

export class AddBucket implements Action {
  readonly type = ADD_BUCKET;

  constructor( public payload: Bucket ) {}

}

export class BucketAdded implements Action {
  readonly type = BUCKET_ADDED;

  constructor( public payload: Bucket ) {}
}

export class DeleteBucket implements Action {
  readonly type = DELETE_BUCKET;

  constructor( public payload: string) {}
}

export class BucketDeleted implements Action {
  readonly type = BUCKET_DELETED;

  constructor( public payload: string) {}
}

export type BucketActions = FetchBuckets | SetBuckets | AddBucket |
  BucketAdded | DeleteBucket | BucketDeleted;
