import { Injectable } from '@angular/core';
import { NewsItem } from 'src/app/news-list/news-item.model';

@Injectable({
  providedIn: 'root'
})
export class EditPageService {

  private editItem: NewsItem | null;

  constructor() { }

  getEditItem(): NewsItem {
    return this.editItem;
  }

  setEditItem(item: NewsItem | undefined) {
    this.editItem = item || null;
  }
}
