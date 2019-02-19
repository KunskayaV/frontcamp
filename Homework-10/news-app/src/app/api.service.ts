import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { toQueryString } from 'src/app/helpers';
import { NEWS_ENDPOINT, API_KEY } from 'src/app/client/constants';
import { NewsItem } from './news-list/news-item.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  static httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic dXNlcm5hbWU1NjpwYXNzd29yZA=='
    })
  };
  
  mongoUrl: string = 'http://localhost:3000/v3/news/custom';

  constructor(private httpClient: HttpClient) { }

  fetchNews(source: string, pagesize: number, page: number) {
    return this.httpClient.get(
      this.generateNewsUrl(source, pagesize, page),
    ).pipe(
      map((response: any) => {
        return response.articles;
      })
    );
  }

  fetchSources() {
    return this.httpClient.get(
      this.generateSourceUrl(),
    ).pipe(
      map((response: any) => {
        return response.sources;
      })
    );
  }

  generateNewsUrl(source: string, pagesize: number, page: number): string {
    const query = toQueryString({
      'sources': source,
      'apiKey': API_KEY,
      'pagesize': pagesize,
      'page': page,
    });
    return `${NEWS_ENDPOINT}/everything${query}`;
  }

  generateSourceUrl(): string {
    return `${NEWS_ENDPOINT}/sources${toQueryString({ 'apiKey': API_KEY })}`;
  }

  fetchMyNews() {
    return this.httpClient.get(
      this.mongoUrl
    );
  }

  postMyNews(news: NewsItem) {
    return this.httpClient.post(this.mongoUrl, news, ApiService.httpOptions)
      .pipe(
        catchError(error => of('error', error)),
      );
  }

  putMyNews(news: NewsItem) {
    return this.httpClient.put(this.mongoUrl, news, ApiService.httpOptions)
      .pipe(
        catchError(error => of('error', error)),
      );
  }

  deleteMyNews() {
    return this.httpClient.delete(this.mongoUrl, ApiService.httpOptions)
      .pipe(
        catchError(error => of('error', error))
      );
  }
}
