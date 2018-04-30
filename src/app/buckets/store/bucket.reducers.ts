import * as BucketActions from './bucket.actions';

import {Bucket} from '../bucket.model';
import {Location} from '../location.model';


export interface State {
  buckets: Bucket[];
  newBucketAdded: boolean;
}

const initialState: State = {
  buckets: [
    new Bucket(
      'Test',
      'Test',
      (new Location('Test', 'Ljubljana') )
    ),
    new Bucket(
      'Test2',
      'Test2',
      (new Location('Test', 'Ljubljana') )
    ),
    new Bucket(
      'Test3',
      'Test3',
      (new Location('Test', 'Ljubljana') )
    ),
    new Bucket(
      'Test4',
      'Test4',
       (new Location('Test', 'Ljubljana') )
    )
  ],
  newBucketAdded: true
};

export function bucketReducer(state = initialState, action: BucketActions.BucketActions ) {
  switch (action.type) {
    case BucketActions.SET_BUCKETS:
      return {
        ...state,
        buckets: [...action.payload]
      };
    case BucketActions.BUCKET_ADDED:
      console.log('On new bucket added action');
      const updatedBuckets = [...state.buckets];
      updatedBuckets.push(action.payload);
      return {
        ...state,
        buckets: updatedBuckets,
        newBucketAdded: true
      };
    default:
      return state;
  }
}
