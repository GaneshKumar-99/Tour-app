import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelloreV1Component } from './vellore-v1.component';

describe('VelloreV1Component', () => {
  let component: VelloreV1Component;
  let fixture: ComponentFixture<VelloreV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelloreV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VelloreV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
