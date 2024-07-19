import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoothukudiComponent } from './thoothukudi.component';

describe('ThoothukudiComponent', () => {
  let component: ThoothukudiComponent;
  let fixture: ComponentFixture<ThoothukudiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThoothukudiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThoothukudiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
