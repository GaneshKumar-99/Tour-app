import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagapattinamComponent } from './nagapattinam.component';

describe('NagapattinamComponent', () => {
  let component: NagapattinamComponent;
  let fixture: ComponentFixture<NagapattinamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NagapattinamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NagapattinamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
