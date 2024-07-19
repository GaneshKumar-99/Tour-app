import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanchipuramComponent } from './kanchipuram.component';

describe('KanchipuramComponent', () => {
  let component: KanchipuramComponent;
  let fixture: ComponentFixture<KanchipuramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanchipuramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanchipuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
