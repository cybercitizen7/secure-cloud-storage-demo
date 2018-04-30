import { ActionReducerMap } from '@ngrx/store';
import * as fromBucket from '../buckets/store/bucket.reducers';
import * as fromObject from '../buckets/bucket-data/store/file-object.reducers';

export interface AppState {
  bucket: fromBucket.State;
  fileObject: fromObject.State;
}

export const reducers: ActionReducerMap<AppState> = {
  bucket: fromBucket.bucketReducer,
  fileObject: fromObject.objectReducer
};
