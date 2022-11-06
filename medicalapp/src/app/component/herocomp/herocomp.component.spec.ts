import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerocompComponent } from './herocomp.component';

describe('HerocompComponent', () => {
  let component: HerocompComponent;
  let fixture: ComponentFixture<HerocompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerocompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
