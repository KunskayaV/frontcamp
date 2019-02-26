import { Component, OnInit } from '@angular/core';
import { UserInfoService } from './user-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  protected isUserLogged: boolean;
  constructor(private userService: UserInfoService) {}

  ngOnInit() {
    this.isUserLogged = this.userService.getUserInfo();
  }

  title = 'news-app';
}
