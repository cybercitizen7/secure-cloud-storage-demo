import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketDataComponent } from './bucket-data.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BucketFilesListComponent} from './bucket-files-list/bucket-files-list.component';
import {BucketDetailsComponent} from './bucket-details/bucket-details.component';
import {FormatFileSizePipe} from '../../shared/file-size.pipe';
import {reducers} from '../../store/app.reducers';
import {StoreModule} from '@ngrx/store';

describe('BucketDataComponent', () => {
  let component: BucketDataComponent;
  let fixture: ComponentFixture<BucketDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketDataComponent, BucketFilesListComponent, BucketDetailsComponent, FormatFileSizePipe ],
      imports: [ RouterTestingModule, StoreModule.forRoot(reducers) ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
