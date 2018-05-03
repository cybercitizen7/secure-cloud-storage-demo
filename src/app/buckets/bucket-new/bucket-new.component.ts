import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as BucketActions from '../store/bucket.actions';
import {Bucket} from '../bucket.model';
import {Location} from '../location.model';

@Component({
  selector: 'app-bucket-new',
  templateUrl: './bucket-new.component.html',
  styleUrls: ['./bucket-new.component.css']
})
export class BucketNewComponent implements OnInit {
  @ViewChild('f') cbForm: NgForm;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    const value = form.value;
    // Create new Bucket from Form Data
    const newBucket = new Bucket(value.name, value.name, new Location( value.name, value.location ));
    // Dispatch it to our Store to send POST request on Server
    this.store.dispatch(new BucketActions.AddBucket( newBucket ));

    form.reset();
  }
}
