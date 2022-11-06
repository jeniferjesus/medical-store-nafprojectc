import { TestBed } from '@angular/core/testing';

import { ApplymedicineserviceService } from './applymedicineservice.service';

describe('ApplymedicineserviceService', () => {
  let service: ApplymedicineserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplymedicineserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
