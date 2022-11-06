import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaminComponent } from './vitamin.component';

describe('VitaminComponent', () => {
  let component: VitaminComponent;
  let fixture: ComponentFixture<VitaminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitaminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VitaminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
