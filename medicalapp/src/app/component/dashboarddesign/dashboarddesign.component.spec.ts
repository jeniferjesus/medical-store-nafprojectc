import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarddesignComponent } from './dashboarddesign.component';

describe('DashboarddesignComponent', () => {
  let component: DashboarddesignComponent;
  let fixture: ComponentFixture<DashboarddesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboarddesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboarddesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
