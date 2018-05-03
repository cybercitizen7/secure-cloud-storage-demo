import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketListComponent } from './bucket-list.component';
import {reducers} from '../../store/app.reducers';
import {StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';

describe('BucketListComponent', () => {
  let component: BucketListComponent;
  let fixture: ComponentFixture<BucketListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketListComponent ],
      imports: [RouterTestingModule, StoreModule.forRoot(reducers) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
