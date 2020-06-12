import { TestBed } from '@angular/core/testing';

import { CountryListService } from './country-list.service';

describe('CountryListService', () => {
  let service: CountryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
