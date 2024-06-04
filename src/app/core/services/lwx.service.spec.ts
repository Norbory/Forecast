import { TestBed } from '@angular/core/testing';

import { LWXService } from './lwx.service';

describe('LWXService', () => {
  let service: LWXService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LWXService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
