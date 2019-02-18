import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { NewsListModule } from './news-list/news-list.module';
import { SharedModule } from './shared/shared.module';
import { FilterBarModule } from './filter-bar/filter-bar.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,
    NewsListModule,
    FilterBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
