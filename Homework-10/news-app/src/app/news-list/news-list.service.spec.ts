import { TestBed } from '@angular/core/testing';

import { NewsListService } from './news-list.service';
import { ApiService } from '../api.service';

describe('NewsListService', () => {
  const spy ={
    fetchNews: { subscribe: jasmine.createSpy() }
  };

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: ApiService, useValue: spy }
    ]
  }));

  it('should be created', () => {
    const service: NewsListService = TestBed.get(NewsListService);
    expect(service).toBeTruthy();
  });
});
