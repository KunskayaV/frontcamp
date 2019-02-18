import { UserInfoService } from './../../user-info.service';
import { Component, OnInit } from '@angular/core';
import { find, map } from 'lodash';

import { NewsItem } from 'src/app/news-list/news-item.model';
import { NewsListService } from 'src/app/news-list/news-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-news-page',
  templateUrl: './edit-news-page.component.html',
  styleUrls: ['./edit-news-page.component.css']
})
export class EditNewsPageComponent implements OnInit {

  private mapping: any = {
    'heading': 'title',
    'description': 'description',
    'content': 'content',
    'image': 'urlToImage',
    'date': 'publishedAt',
    'author': 'author',
    'sourceUrl': 'url',
  };

  private newNewsData: NewsItem = {
    id: 'custom',
    title: '',
    description: '',
    content: '',
    urlToImage: '',
    publishedAt: '',
    author: '',
  };
  newsToEdit: NewsItem = { ...this.newNewsData };

  imageSource = 0;

  private routeParams: any = {};
  private paramsSubscribe: any;
  protected subscriptions: any[] = [];

  constructor(
    private userService: UserInfoService,
    private newsList: NewsListService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.subscriptions.push(
      this.route.params.subscribe(data => {
        this.routeParams.id = data.id;
      }),
    );
   }

  ngOnInit() {
    const article = find(this.newsList.getNews(), { id: this.routeParams.id });
    if (article) this.newsToEdit = article;
    this.subscriptions.push(
      this.userService.updateIsUserLoggedStatus.subscribe(
        isUserLogged => {
          if (!isUserLogged) {
            this.router.navigate(['./news']);
          }
        }
      ),
    );
  }

  ngOnDestroy() {
    map(this.subscriptions, subscription => subscription.unsubscribe());
  }

  getValueToSet(key: string) {
    return this.newsToEdit[this.mapping[key]] || '';
  }

  setValue(value, key) {
    this.newNewsData[this.mapping[key]] = value;
  }

  saveNews() {
    console.log('save news');
  }

  cancelEditing() {
    console.log('cancel editing');
  }

  change(value: number) {
    console.log('change imageSource to', value);
    this.imageSource = value;
  }

}
