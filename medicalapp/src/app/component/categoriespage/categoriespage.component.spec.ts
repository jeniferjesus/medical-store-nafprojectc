import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriespageComponent } from './categoriespage.component';

describe('CategoriespageComponent', () => {
  let component: CategoriespageComponent;
  let fixture: ComponentFixture<CategoriespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriespageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
