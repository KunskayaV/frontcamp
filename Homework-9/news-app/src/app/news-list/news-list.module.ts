import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsListComponent } from './news-list/news-list.component';
import { NewsListItemComponent } from './news-list-item/news-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { FilterNewsPipe } from './filter-news.pipe';

@NgModule({
  declarations: [NewsListComponent, NewsListItemComponent, FilterNewsPipe],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [NewsListComponent],
})
export class NewsListModule { }
