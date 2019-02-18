import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { toQueryString } from 'src/app/helpers';
import { NEWS_ENDPOINT, API_KEY } from 'src/app/client/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

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
    return `${NEWS_ENDPOINT}/everthing${query}`;
  }

  generateSourceUrl(): string {
    return `${NEWS_ENDPOINT}/soures${toQueryString({ 'apiKey': API_KEY })}`;
  }
}
