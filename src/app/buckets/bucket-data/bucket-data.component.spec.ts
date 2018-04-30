import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketDataComponent } from './bucket-data.component';

describe('BucketDataComponent', () => {
  let component: BucketDataComponent;
  let fixture: ComponentFixture<BucketDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketDataComponent ]
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
