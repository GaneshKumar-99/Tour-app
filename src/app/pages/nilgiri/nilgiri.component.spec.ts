import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NilgiriComponent } from './nilgiri.component';

describe('NilgiriComponent', () => {
  let component: NilgiriComponent;
  let fixture: ComponentFixture<NilgiriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NilgiriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NilgiriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
