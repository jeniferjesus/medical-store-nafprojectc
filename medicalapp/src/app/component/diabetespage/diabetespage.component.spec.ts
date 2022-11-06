import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetespageComponent } from './diabetespage.component';

describe('DiabetespageComponent', () => {
  let component: DiabetespageComponent;
  let fixture: ComponentFixture<DiabetespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetespageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiabetespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
