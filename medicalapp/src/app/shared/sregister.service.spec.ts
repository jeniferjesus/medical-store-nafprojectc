import { TestBed } from '@angular/core/testing';

import { SregisterService } from './sregister.service';

describe('SregisterService', () => {
  let service: SregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
