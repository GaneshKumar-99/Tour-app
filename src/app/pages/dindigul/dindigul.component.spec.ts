import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DindigulComponent } from './dindigul.component';

describe('DindigulComponent', () => {
  let component: DindigulComponent;
  let fixture: ComponentFixture<DindigulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DindigulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DindigulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
