import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as fromApp from '../../store/app.reducers';
import * as fromBucket from '../store/bucket.reducers';
import * as fromFileObject from './store/file-object.reducers';
import * as FileObjectActions from './store/file-object.actions';
import * as BucketActions from '../store/bucket.actions';
import {FileObject} from './file-object.model';

@Component({
  selector: 'app-bucket-data',
  templateUrl: './bucket-data.component.html',
  styleUrls: ['./bucket-data.component.css']
})
export class BucketDataComponent implements OnInit {
  bucketState: Observable<fromBucket.State>;
  fileObjectState: Observable<fromFileObject.State>;
  bucketId: string;
  objectSelected: number;
  fileObjects: FileObject[];
  showDetailsData: boolean;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    // Subscribe to route params, to listen for changes in URL
    this.route.params
      .subscribe(
        (params: Params) => {
          this.bucketId = params['id'];

          // Check if there is a way to optimizie this navigation through Router instead, if there will be time
          if ( this.router.url === '/' + this.bucketId + '/details') {
            this.onNavigationSelected('details');
          } else {
            this.onNavigationSelected('files');
          }
        }
      );

    // First dispatch Action to fetch files for the current page
    console.log('Fetching files for bucket: ' + this.bucketId);
    this.store.dispatch(new FileObjectActions.FetchObjects(this.bucketId));

    // Get the current state of FileObjects
    this.fileObjectState = this.store.select('fileObject');
    // then subscribe to listen for changes on some parameters
    this.fileObjectState.subscribe(
      (fileObjects) => {
        if ( fileObjects.objectSelectedIndex > -1 ) {
          this.objectSelected = fileObjects.objectSelectedIndex;
          this.fileObjects = fileObjects.objects;
        }
      }
    );

    this.bucketState = this.store.select('bucket');
  }

  onUploadObject() {

  }

  onDeleteObject() {
    if ( this.objectSelected > -1 ) {
      console.log('Deleting object ON DELETE CLICK: ' + this.fileObjects[this.objectSelected].name);
      this.store.dispatch(new FileObjectActions.DeleteObject(this.fileObjects[this.objectSelected].name, this.bucketId));
    }
  }

  onDeleteBucket() {
    console.log('Deleting bucket ON DELETE CLICK: ' + this.bucketId);
    this.store.dispatch(new BucketActions.DeleteBucket( this.bucketId ));
    this.router.navigate(['']);
  }

  onNavigationSelected( whereTo: string ) {
    this.showDetailsData = whereTo === 'details';
  }

}
