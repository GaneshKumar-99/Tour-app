import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AriyalurComponent } from './ariyalur.component';

describe('AriyalurComponent', () => {
  let component: AriyalurComponent;
  let fixture: ComponentFixture<AriyalurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AriyalurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AriyalurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
