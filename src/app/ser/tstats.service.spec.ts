import { TestBed } from '@angular/core/testing';

import { TstatsService } from './tstats.service';

describe('TstatsService', () => {
  let service: TstatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TstatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
