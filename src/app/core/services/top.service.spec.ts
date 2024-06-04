import { TestBed } from '@angular/core/testing';

import { TOPService } from './top.service';

describe('TOPService', () => {
  let service: TOPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TOPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
