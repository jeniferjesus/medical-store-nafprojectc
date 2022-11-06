import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecategoryComponent } from './servicecategory.component';

describe('ServicecategoryComponent', () => {
  let component: ServicecategoryComponent;
  let fixture: ComponentFixture<ServicecategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicecategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
