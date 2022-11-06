import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcategoryComponent } from './navcategory.component';

describe('NavcategoryComponent', () => {
  let component: NavcategoryComponent;
  let fixture: ComponentFixture<NavcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
