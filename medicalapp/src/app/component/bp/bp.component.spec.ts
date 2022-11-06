import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpComponent } from './bp.component';

describe('BpComponent', () => {
  let component: BpComponent;
  let fixture: ComponentFixture<BpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
