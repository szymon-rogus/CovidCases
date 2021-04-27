import { TestBed } from '@angular/core/testing';

import { StylingService } from './styling.service';

describe('StylingService', () => {
  let service: StylingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StylingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
