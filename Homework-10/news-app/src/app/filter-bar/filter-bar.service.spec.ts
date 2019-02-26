import { TestBed } from '@angular/core/testing';

import { FilterBarService } from './filter-bar.service';
import { ApiService } from '../api.service';

describe('FilterBarService', () => {
  const spy = jasmine.createSpyObj('ApiService', ['fetchSources']);

  beforeEach(() => TestBed.configureTestingModule({
    providers: [ {provide: ApiService, useValue: spy } ]
  }));

  it('should be created', () => {
    const service: FilterBarService = TestBed.get(FilterBarService);
    expect(service).toBeTruthy();
  });
});
