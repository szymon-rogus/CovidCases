import { TestBed } from '@angular/core/testing';

import { CountryDetailsService } from './country-details.service';

describe('CountryDetailsService', () => {
  let service: CountryDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
