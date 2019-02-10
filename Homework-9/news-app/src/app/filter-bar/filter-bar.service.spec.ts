import { TestBed } from '@angular/core/testing';

import { FilterBarService } from './filter-bar.service';

describe('FilterBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterBarService = TestBed.get(FilterBarService);
    expect(service).toBeTruthy();
  });
});
