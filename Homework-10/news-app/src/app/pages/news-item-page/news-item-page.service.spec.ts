import { TestBed } from '@angular/core/testing';

import { NewsItemPageService } from './news-item-page.service';

describe('NewsItemPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsItemPageService = TestBed.get(NewsItemPageService);
    expect(service).toBeTruthy();
  });
});
