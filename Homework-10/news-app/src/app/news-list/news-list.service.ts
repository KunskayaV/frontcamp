import { Injectable } from '@angular/core';
import { map } from 'lodash';

import { NewsItem } from './news-item.model';
import { ApiService } from '../api.service';
import { FilterBarService } from '../filter-bar/filter-bar.service';

@Injectable({
  providedIn: 'root'
})
export class NewsListService {

  newsList: NewsItem[] = [];
  pagesize: number = 4;
  page: number = 1;
  pickedName: string = '';

  constructor(
    private apiService: ApiService,
    private filterService: FilterBarService,
  ) { 
      this.filterService.sourceShanged.subscribe(
        newSource => {
          this.page = 1;
          this.pickedName = newSource;
          this.fetchNews();
        },
      );
  }

  public fetchNews() {
    return this.apiService.fetchNews(this.pickedName, this.pagesize, this.page)
    .subscribe(
      response => {
        this.newsList = response;
      },
      error => console.log(error)
    );
  }

  public loadMore() {
    return this.apiService.fetchNews(this.pickedName, this.pagesize, ++this.page)
    .subscribe(
      response => {
        this.newsList = this.newsList.slice().concat(response);
      },
      error => console.log(error)
    );
  }

  public getNews(): NewsItem[] {
    return this.newsList;
  }
}
