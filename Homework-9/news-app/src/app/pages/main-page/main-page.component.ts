import { Component, OnInit, Input } from '@angular/core';
import { UserInfoService } from 'src/app/user-info.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  pickedSource: string | undefined;
  userIsLogged: boolean;

  constructor(private userService: UserInfoService) { }

  ngOnInit() {
    this.userIsLogged = this.userService.getUserInfo();
  }

  get pageSource() {
    return this.pickedSource || "All sources";
  }

  loadMore() {
    console.log('Load more');
  }

}
