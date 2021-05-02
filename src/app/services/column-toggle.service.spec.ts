import { TestBed } from '@angular/core/testing';

import { ColumnToggleService } from './column-toggle.service';

describe('ColumnToggleService', () => {
  let service: ColumnToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColumnToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
