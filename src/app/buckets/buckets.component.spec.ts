import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketsComponent } from './buckets.component';
import {BucketNewComponent} from './bucket-new/bucket-new.component';
import {BucketListComponent} from './bucket-list/bucket-list.component';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {reducers} from '../store/app.reducers';
import {RouterTestingModule} from '@angular/router/testing';

describe('BucketsComponent', () => {
  let component: BucketsComponent;
  let fixture: ComponentFixture<BucketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketsComponent, BucketNewComponent, BucketListComponent ],
      imports: [ FormsModule, StoreModule.forRoot(reducers), RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
