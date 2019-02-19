import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { map, get } from 'lodash';

import { NewsItem } from '../news-item.model';
import { UserInfoService } from 'src/app/user-info.service';
import { NewsItemPageService } from 'src/app/pages/news-item-page/news-item-page.service';
import { EditPageService } from 'src/app/pages/edit-news-page/edit-page.service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.css']
})
export class NewsListItemComponent implements OnInit {

  @Input() itemInfo: NewsItem;

  protected isEditable: boolean;
  protected subscriptions: any[] = [];

  constructor(
    private router: Router,
    private userService: UserInfoService,
    private newsPageService: NewsItemPageService,
    private editPageService: EditPageService,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    const isCustom = this.itemInfo.id === 'custom';
    this.isEditable = this.userService.getUserInfo() && isCustom;
    this.subscriptions.push(
      this.userService.updateIsUserLoggedStatus.subscribe(
        isUserLogged => this.isEditable = isUserLogged  && isCustom,
      ),
    );
  }

  ngOnDestroy() {
    map(this.subscriptions, subscription => subscription.unsubscribe());
  }

  openNews() {
    this.newsPageService.setViewItem(this.itemInfo);
    this.router.navigate(['./news', get(this.itemInfo, ['source', 'id'], 'id')]);
  }

  editNews() {
    this.editPageService.setEditItem(this.itemInfo);
    this.router.navigate(['./news', get(this.itemInfo, ['source', 'id'], 'id'), 'edit']);
  }

  removeNews() {
    this.apiService.deleteMyNews()
      .subscribe(result => console.log('result', result));
    this.router.navigate(['./news']);
  }

}
