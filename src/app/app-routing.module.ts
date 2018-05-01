import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {BucketsComponent} from './buckets/buckets.component';
import {BucketDataComponent} from './buckets/bucket-data/bucket-data.component';
import {BucketDetailsComponent} from './buckets/bucket-data/bucket-details/bucket-details.component';

const appRoutes: Routes = [
  { path: '', component: BucketsComponent },
  { path: ':id', component: BucketDataComponent,
    children: [
      { path: '', redirectTo: 'files', pathMatch: 'full'},
      { path: 'files', component: BucketDataComponent },
      { path: 'details', component: BucketDataComponent }
    ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules} )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
