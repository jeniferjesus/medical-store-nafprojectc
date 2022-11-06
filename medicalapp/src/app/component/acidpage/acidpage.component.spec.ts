import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcidpageComponent } from './acidpage.component';

describe('AcidpageComponent', () => {
  let component: AcidpageComponent;
  let fixture: ComponentFixture<AcidpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcidpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcidpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
