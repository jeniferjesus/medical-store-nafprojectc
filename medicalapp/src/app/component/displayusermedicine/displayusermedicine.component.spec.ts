import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayusermedicineComponent } from './displayusermedicine.component';

describe('DisplayusermedicineComponent', () => {
  let component: DisplayusermedicineComponent;
  let fixture: ComponentFixture<DisplayusermedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayusermedicineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayusermedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
