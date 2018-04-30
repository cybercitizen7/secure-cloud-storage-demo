import {NgModule} from '@angular/core';
import {BucketsComponent} from './buckets.component';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { BucketNewComponent } from './bucket-new/bucket-new.component';
import { BucketFilesListComponent } from './bucket-data/bucket-files-list/bucket-files-list.component';
import { BucketDataComponent } from './bucket-data/bucket-data.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import { BucketDetailsComponent } from './bucket-data/bucket-details/bucket-details.component';

@NgModule({
  declarations: [
    BucketsComponent,
    BucketListComponent,
    BucketNewComponent,
    BucketFilesListComponent,
    BucketDataComponent,
    BucketDetailsComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    BucketsComponent
  ]
})
export class BucketsModule {}
