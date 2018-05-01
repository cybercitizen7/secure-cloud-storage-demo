import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';

import * as FileObjectActions from './file-object.actions';
import {FileObject} from '../file-object.model';

@Injectable()
export class FileObjectEffects {
  @Effect()
  filesFetch = this.actions$
    .ofType(FileObjectActions.FETCH_OBJECTS)
    .switchMap(( action: FileObjectActions.FetchObjects) => {
      console.log('Sending GET request to Server to FETCH FILES for ' + action.bucketId );
      return this.httpClient.get<FileObject[]>('https://challenge.3fs.si/storage/buckets/' + action.bucketId + '/objects', {
        observe: 'body',
        responseType: 'json'
      });
    })
    .map(
      (files) => {
        console.log('Receives bucket:' + files[0].name);
        return {
          type: FileObjectActions.OBJECTS_FETCHED,
          payload: files
        };
      }
    );

  @Effect()
  fileAdd = this.actions$
    .ofType(FileObjectActions.UPLOAD_OBJECT)
    .switchMap((action: FileObjectActions.UploadObject) => {
      console.log('Sending POST request on Server');
      return this.httpClient.post('https://challenge.3fs.si/storage/buckets/' + action.bucketId + '/objects/', action.payload);
    })
    .map(
      (file: FileObject ) => {
        console.log(file.name);
        return {
          type: FileObjectActions.OBJECT_ADDED,
          payload: file
        };
      }
    );

  @Effect()
  fileDelete = this.actions$
    .ofType(FileObjectActions.DELETE_OBJECT)
    .map(
      (action: FileObjectActions.DeleteObject) => {
        return {
          type: FileObjectActions.OBJECT_DELETED,
          payload: action.objectId
        };
      }
    );
    // .switchMap((action: FileObjectActions.DeleteObject) => {
    //   console.log('Sending DELETE request on Server for: ' + action.bucketId + ' and ' + action.objectId);
    //   return this.httpClient.delete('https://challenge.3fs.si/storage/buckets/' + action.bucketId + '/objects/' + action.objectId );
    // })


  constructor( private actions$: Actions,
               private httpClient: HttpClient) {}
}
