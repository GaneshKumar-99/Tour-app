import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiruvannamalaiComponent } from './thiruvannamalai.component';

describe('ThiruvannamalaiComponent', () => {
  let component: ThiruvannamalaiComponent;
  let fixture: ComponentFixture<ThiruvannamalaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThiruvannamalaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThiruvannamalaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
