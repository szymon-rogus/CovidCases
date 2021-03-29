import { TestBed } from '@angular/core/testing';

import { CountryFlagService } from './country-flag.service';

describe('CountryFlagService', () => {
  let service: CountryFlagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryFlagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
