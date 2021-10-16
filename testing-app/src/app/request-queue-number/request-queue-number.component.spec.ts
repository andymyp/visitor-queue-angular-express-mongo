import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestQueueNumberComponent } from './request-queue-number.component';

describe('RequestQueueNumberComponent', () => {
  let component: RequestQueueNumberComponent;
  let fixture: ComponentFixture<RequestQueueNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestQueueNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestQueueNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
