import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'lodash';

import { NewsItem } from '../news-item.model';
import { UserInfoService } from 'src/app/user-info.service';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.css']
})
export class NewsListItemComponent implements OnInit {

  @Input() itemInfo: NewsItem;

  protected isEditable: boolean;
  protected subscriptions: any[] = [];

  constructor(private router: Router, private userService: UserInfoService) { }

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
    this.router.navigate(['./news', this.itemInfo.id]);
  }

  editNews() {
    this.router.navigate(['./news', this.itemInfo.id, 'edit']);
  }

  removeNews() {
    console.log('remove News');
  }

}
