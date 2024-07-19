import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelloreComponent } from './vellore.component';

describe('VelloreComponent', () => {
  let component: VelloreComponent;
  let fixture: ComponentFixture<VelloreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelloreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VelloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
