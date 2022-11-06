import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeverComponent } from './fever.component';

describe('FeverComponent', () => {
  let component: FeverComponent;
  let fixture: ComponentFixture<FeverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
