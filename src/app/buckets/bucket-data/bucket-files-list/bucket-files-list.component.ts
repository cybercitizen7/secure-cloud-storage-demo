import {Component, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import * as fromFileObject from '../store/file-object.reducers';
import * as fromApp from '../../../store/app.reducers';
import * as FileObjectActions from '../store/file-object.actions';

@Component({
  selector: 'app-bucket-files-list',
  templateUrl: './bucket-files-list.component.html',
  styleUrls: ['./bucket-files-list.component.css']
})
export class BucketFilesListComponent implements OnInit {
  fileObjectState: Observable<fromFileObject.State>;
  @Output() selectedRow: number;


  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.fileObjectState = this.store.select('fileObject');
  }


  onSelectRow( index: number) {
    console.log('Row selected: ' + index);
    this.selectedRow = index;
    this.store.dispatch(new FileObjectActions.UpdateSelectedIndex(index));
  }
}
