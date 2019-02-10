import { Component, OnInit, Input } from '@angular/core';
import { NewsListService } from '../../news-list.service';
import { NewsItem } from '../news-item.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  public news: NewsItem[] = [];
  constructor(private newsListService: NewsListService) { }

  ngOnInit() {
    this.news = this.newsListService.getNews();
  }

}
