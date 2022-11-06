import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayResigerdetailComponent } from './display-resigerdetail.component';

describe('DisplayResigerdetailComponent', () => {
  let component: DisplayResigerdetailComponent;
  let fixture: ComponentFixture<DisplayResigerdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayResigerdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayResigerdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
