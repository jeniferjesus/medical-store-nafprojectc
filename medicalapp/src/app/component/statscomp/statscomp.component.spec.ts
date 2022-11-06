import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatscompComponent } from './statscomp.component';

describe('StatscompComponent', () => {
  let component: StatscompComponent;
  let fixture: ComponentFixture<StatscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatscompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
