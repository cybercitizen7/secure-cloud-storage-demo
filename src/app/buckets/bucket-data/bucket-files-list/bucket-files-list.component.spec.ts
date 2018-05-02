import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketFilesListComponent } from './bucket-files-list.component';
import {FormatFileSizePipe} from '../../../shared/file-size.pipe';
import {reducers} from '../../../store/app.reducers';
import {StoreModule} from '@ngrx/store';

describe('BucketFilesListComponent', () => {
  let component: BucketFilesListComponent;
  let fixture: ComponentFixture<BucketFilesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketFilesListComponent, FormatFileSizePipe ],
      imports: [ StoreModule.forRoot(reducers) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketFilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
