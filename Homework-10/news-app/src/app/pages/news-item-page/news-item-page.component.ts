import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { find, map } from 'lodash';

import { NewsItem } from 'src/app/news-list/news-item.model';
import { NewsListService } from 'src/app/news-list/news-list.service';
import { UserInfoService } from 'src/app/user-info.service';

@Component({
  selector: 'app-news-item-page',
  templateUrl: './news-item-page.component.html',
  styleUrls: ['./news-item-page.component.css']
})
export class NewsItemPageComponent implements OnInit {

  private routeParams: any = {};
  private paramsSubscribe: any;
  public pageSource: string = '';

  private itemInfo: NewsItem;
  protected isEditable: boolean;
  protected subscriptions: any = [];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsList: NewsListService,
    private userService: UserInfoService
  ) {
    this.subscriptions.push(
      this.route.params.subscribe(data => {
        this.routeParams.id = data.id;
      }),
    );
  }

  ngOnInit() {
    this.itemInfo = find(this.newsList.getNews(), { id: this.routeParams.id});
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
    this.router.navigate(['./news', this.itemInfo.id, 'edit']);
  }

}
