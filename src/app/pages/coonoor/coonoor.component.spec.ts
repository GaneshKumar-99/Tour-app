import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoonoorComponent } from './coonoor.component';

describe('CoonoorComponent', () => {
  let component: CoonoorComponent;
  let fixture: ComponentFixture<CoonoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoonoorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoonoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
