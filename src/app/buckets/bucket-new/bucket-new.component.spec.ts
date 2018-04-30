import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketNewComponent } from './bucket-new.component';

describe('BucketNewComponent', () => {
  let component: BucketNewComponent;
  let fixture: ComponentFixture<BucketNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketNewComponent ]
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
