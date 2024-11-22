import { TestBed } from '@angular/core/testing';

import { TrosterService } from './troster.service';

describe('TrosterService', () => {
  let service: TrosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrosterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
