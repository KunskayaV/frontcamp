import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let injector: TestBed;
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    injector = getTestBed();
    service = injector.get(ApiService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  describe('#fetchNews', () => {
    const args = ['source', 2, 1];

    it('should call @method generateNewsUrl', () => {
      spyOn(service, 'generateNewsUrl');
      service.fetchNews('source', 2, 1);

      expect(service.generateNewsUrl).toHaveBeenCalledWith(...args);
    });

    it('should return an Observable', () => {
      const dummyArticles = [
        { id: 'id1', title: 'title1'},
        { id: 'id2', title: 'title2'},
      ];
  
      service.fetchNews('source', 2, 1).subscribe(articles => {
        expect(articles.length).toBe(dummyArticles.length);
        expect(articles).toEqual(dummyArticles);
      });

      const req = httpMock.expectOne(service.generateNewsUrl('source', 2, 1));
      expect(req.request.method).toBe("GET");
      req.flush({ articles: dummyArticles });
    });
  });

  describe('#fetchSources', () => {
    it('should call @method generateSourceUrl', () => {
      spyOn(service, 'generateSourceUrl');
      service.fetchSources();

      expect(service.generateSourceUrl).toHaveBeenCalled();
    });

    it('should return an Observable', () => {
      const dummySources = [
        { id: 'id1', name: 'source1'},
        { id: 'id2', name: 'source2'},
      ];
  
      service.fetchSources().subscribe(sources => {
        expect(sources.length).toBe(dummySources.length);
        expect(sources).toEqual(dummySources);
      });

      const req = httpMock.expectOne(service.generateSourceUrl());
      expect(req.request.method).toBe("GET");
      req.flush({ sources: dummySources });
    });
  });

  describe('#fetchMyNews', () => {
    it('should return an Observable', () => {

      const dummyMyNews = [
        { id: 'custom', title: 'My News' },
      ];
      service.fetchMyNews().subscribe();

      const req = httpMock.expectOne(service.mongoUrl);
      expect(req.request.method).toBe("GET");
      req.flush(dummyMyNews);
    });
  });

  describe('#postMyNews', () => {
    it('should return an Observable', () => {

      const dummyMyNews = {
        id: 'custom',
        title: 'My News',
        author: 'author',
        publishedAt: 'date',
        urlToImage: 'url',
        description: 'description',
        content: 'content',
        type: 'type',
      };

      service.postMyNews(dummyMyNews).subscribe();

      const req = httpMock.expectOne(service.mongoUrl);
      expect(req.request.method).toBe("POST");
    });
  });

  describe('#putMyNews', () => {
    it('should return an Observable', () => {

      const dummyMyNews = {
        id: 'custom',
        title: 'My News',
        author: 'author',
        publishedAt: 'date',
        urlToImage: 'url',
        description: 'description',
        content: 'content',
        type: 'type',
      };

      service.putMyNews(dummyMyNews).subscribe();

      const req = httpMock.expectOne(service.mongoUrl);
      expect(req.request.method).toBe("PUT");
    });
  });

  describe('#deleteMyNews', () => {
    it('should return an Observable', () => {

      const dummyMyNews = {
        id: 'custom',
        title: 'My News',
        author: 'author',
        publishedAt: 'date',
        urlToImage: 'url',
        description: 'description',
        content: 'content',
        type: 'type',
      };

      service.deleteMyNews().subscribe();

      const req = httpMock.expectOne(service.mongoUrl);
      expect(req.request.method).toBe("DELETE");
    });
  });

});
