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

  public news: NewsItem[] = [];
  private subscriptions: any[] = [];
  public textFilter: string;
  public customFilter: boolean;


  constructor(
    private newsListService: NewsListService,
    private filterService: FilterBarService,
  ) { }

  ngOnInit() {
    this.news = this.newsListService.getNews();
    this.textFilter = this.filterService.getTextFilter();
    this.customFilter = this.filterService.getCustomFilter();
    this.subscriptions.push(
      this.filterService.apply.subscribe(
        ({ textFilter, customFilter }) => this.setFilterForList(textFilter, customFilter),
      ),
    );
  }

  ngOnDestroy() {
    map(this.subscriptions, subscription => subscription.unsubscribe());
  }

  setFilterForList(text: string, showCustom: boolean) {
    this.textFilter = text;
    this.customFilter = showCustom;
  }
}
