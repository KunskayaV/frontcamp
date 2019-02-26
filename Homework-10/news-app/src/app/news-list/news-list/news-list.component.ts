import { Component, OnInit, Input } from '@angular/core';
import { map } from 'lodash';

import { FilterBarService } from './../../filter-bar/filter-bar.service';
import { NewsListService } from '../news-list.service';
import { NewsItem } from '../news-item.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  private subscriptions: any[] = [];
  public textFilter: string;
  public customFilter: boolean;


  constructor(
    private newsListService: NewsListService,
    private filterService: FilterBarService,
  ) { }

  ngOnInit() {
    this.textFilter = this.filterService.getTextFilter();
    this.customFilter = this.filterService.getCustomFilter();
    this.subscriptions.push(
      this.filterService.apply.subscribe(
        ({ textFilter, customFilter }) => this.setFilterForList(textFilter, customFilter),
      ),
      this.filterService.sourceShanged.subscribe(
        newSource => this.newsListService.changeNewsSource(newSource),
      ),
    );
  }

  ngOnDestroy() {
    map(this.subscriptions, subscription => subscription.unsubscribe());
  }

  get news(): NewsItem[] {
    return this.customFilter
      ? this.newsListService.getMyNews()
      : this.newsListService.getNews();
  }

  setFilterForList(text: string, showCustom: boolean) {
    this.textFilter = text;
    this.customFilter = showCustom;
  }

  loadMore() {
    this.newsListService.loadMore();
  }
}
