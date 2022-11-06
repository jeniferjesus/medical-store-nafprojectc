import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndcompComponent } from './endcomp.component';

describe('EndcompComponent', () => {
  let component: EndcompComponent;
  let fixture: ComponentFixture<EndcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
