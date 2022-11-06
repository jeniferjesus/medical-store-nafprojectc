import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonmedComponent } from './commonmed.component';

describe('CommonmedComponent', () => {
  let component: CommonmedComponent;
  let fixture: ComponentFixture<CommonmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonmedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
