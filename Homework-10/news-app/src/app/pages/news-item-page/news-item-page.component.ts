import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, get } from 'lodash';

import { NewsItem } from 'src/app/news-list/news-item.model';
import { NewsListService } from 'src/app/news-list/news-list.service';
import { UserInfoService } from 'src/app/user-info.service';
import { NewsItemPageService } from './news-item-page.service';
import { EditPageService } from '../edit-news-page/edit-page.service';

@Component({
  selector: 'app-news-item-page',
  templateUrl: './news-item-page.component.html',
  styleUrls: ['./news-item-page.component.css']
})
export class NewsItemPageComponent implements OnInit {

  private routeParams: any = {};
  private paramsSubscribe: any;
  public pageSource: string = '';

  public itemInfo: NewsItem;
  protected isEditable: boolean;
  protected subscriptions: any = [];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserInfoService,
    private newsPageService: NewsItemPageService,
    private editPageService: EditPageService,
  ) {
    this.subscriptions.push(
      this.route.params.subscribe(data => {
        this.routeParams.id = data.id;
      }),
    );
  }

  ngOnInit() {
    this.itemInfo = this.newsPageService.getViewItem();
    const isCustom = this.itemInfo.id === 'custom';
    this.isEditable = this.userService.getUserInfo() && isCustom;
    if (isCustom) {
      this.subscriptions.push(
        this.userService.updateIsUserLoggedStatus.subscribe(
          isUserLogged => {
            if (!isUserLogged) {
              this.router.navigate(['./news']);
            }
          }
        )
      );
    }
  }

  ngOnDestroy() {
    map(this.subscriptions, subscription => subscription.unsubscribe());
  }

  editNews() {
    this.editPageService.setEditItem(this.itemInfo);
    this.router.navigate(['./news', get(this.itemInfo, ['source', 'id'], 'id'), 'edit']);
  }

}
