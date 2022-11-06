import { TestBed } from '@angular/core/testing';

import { SstockdetailService } from './sstockdetail.service';

describe('SstockdetailService', () => {
  let service: SstockdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SstockdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
