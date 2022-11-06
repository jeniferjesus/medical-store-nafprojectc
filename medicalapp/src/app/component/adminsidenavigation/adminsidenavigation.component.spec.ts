import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsidenavigationComponent } from './adminsidenavigation.component';

describe('AdminsidenavigationComponent', () => {
  let component: AdminsidenavigationComponent;
  let fixture: ComponentFixture<AdminsidenavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsidenavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsidenavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
