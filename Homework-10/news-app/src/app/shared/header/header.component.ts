import { Component, OnInit, Input } from '@angular/core';
import { map } from 'lodash';

import { UserInfoService } from './../../user-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  protected isUserLogged: boolean;
  protected subscriptions: any[] = [];

  constructor(private userInfoService: UserInfoService) { }

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

  logIn() {
    this.userInfoService.changeIsUserLogged(true);
  }

  logOut() {
    this.userInfoService.changeIsUserLogged(false);
  }

}
