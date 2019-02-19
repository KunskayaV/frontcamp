import { Injectable } from '@angular/core';
import { NewsItem } from 'src/app/news-list/news-item.model';

@Injectable({
  providedIn: 'root'
})
export class NewsItemPageService {

  private viewItem: NewsItem;

  constructor() { }

  getViewItem(): NewsItem {
    return this.viewItem;
  }

  setViewItem(item: NewsItem) {
    console.log(item)
    this.viewItem = item;
  }
}
