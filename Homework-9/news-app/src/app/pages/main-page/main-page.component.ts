import { Component, OnInit, Input } from '@angular/core';
import { map } from 'lodash';

import { FilterBarService } from './../../filter-bar/filter-bar.service';
import { UserInfoService } from 'src/app/user-info.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  pickedSource: string | undefined = '';
  protected isUserLogged: boolean;
  protected subscriptions: any[] = [];

  constructor(
    private userInfoService: UserInfoService,
    private filterBarService: FilterBarService,
  ) { }

  ngOnInit() {
    this.isUserLogged = this.userInfoService.getUserInfo();
    this.subscriptions.push(
      this.userInfoService.updateIsUserLoggedStatus.subscribe(
        isUserLogged => this.isUserLogged = isUserLogged,
      ),
    );
  }

  ngOnDestroy() {
    map(this.subscriptions, subscription => subscription.unsubscribe());
  }

  get pageSource() {
    return this.filterBarService.getPickedSource();
  }

  loadMore() {
    console.log('Load more');
  }
}
