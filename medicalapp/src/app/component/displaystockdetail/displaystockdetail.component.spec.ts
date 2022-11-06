import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaystockdetailComponent } from './displaystockdetail.component';

describe('DisplaystockdetailComponent', () => {
  let component: DisplaystockdetailComponent;
  let fixture: ComponentFixture<DisplaystockdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaystockdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaystockdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
