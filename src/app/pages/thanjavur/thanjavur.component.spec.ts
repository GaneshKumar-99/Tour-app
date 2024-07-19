import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanjavurComponent } from './thanjavur.component';

describe('ThanjavurComponent', () => {
  let component: ThanjavurComponent;
  let fixture: ComponentFixture<ThanjavurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanjavurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThanjavurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
