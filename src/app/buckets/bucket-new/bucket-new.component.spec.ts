import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketNewComponent } from './bucket-new.component';
import {FormsModule} from '@angular/forms';
import {reducers} from '../../store/app.reducers';
import {StoreModule} from '@ngrx/store';

describe('BucketNewComponent', () => {
  let component: BucketNewComponent;
  let fixture: ComponentFixture<BucketNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketNewComponent ],
      imports: [ FormsModule, StoreModule.forRoot(reducers) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
