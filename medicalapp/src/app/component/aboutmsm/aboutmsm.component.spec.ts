import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmsmComponent } from './aboutmsm.component';

describe('AboutmsmComponent', () => {
  let component: AboutmsmComponent;
  let fixture: ComponentFixture<AboutmsmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmsmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutmsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
