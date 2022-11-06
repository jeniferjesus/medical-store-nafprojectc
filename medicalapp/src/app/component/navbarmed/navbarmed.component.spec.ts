import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarmedComponent } from './navbarmed.component';

describe('NavbarmedComponent', () => {
  let component: NavbarmedComponent;
  let fixture: ComponentFixture<NavbarmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarmedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
