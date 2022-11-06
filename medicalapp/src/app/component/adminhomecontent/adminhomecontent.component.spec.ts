import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhomecontentComponent } from './adminhomecontent.component';

describe('AdminhomecontentComponent', () => {
  let component: AdminhomecontentComponent;
  let fixture: ComponentFixture<AdminhomecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminhomecontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminhomecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
