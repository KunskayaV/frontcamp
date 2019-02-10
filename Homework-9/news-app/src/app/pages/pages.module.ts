import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { NewsListModule } from '../news-list/news-list.module';
import { FilterBarModule } from '../filter-bar/filter-bar.module';
import { NewsItemPageComponent } from './news-item-page/news-item-page.component';
import { EditNewsPageComponent } from './edit-news-page/edit-news-page.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [MainPageComponent, NewsItemPageComponent, EditNewsPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    NewsListModule,
    FilterBarModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    MainPageComponent,
    NewsItemPageComponent,
    EditNewsPageComponent,
  ],
})
export class PagesModule { }
