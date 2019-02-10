import { Component, OnInit, Input } from '@angular/core';
import { NewsItem } from '../news-item.model';
import { Router } from '@angular/router';

import { UserInfoService } from 'src/app/user-info.service';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.css']
})
export class NewsListItemComponent implements OnInit {

  @Input() itemInfo: NewsItem;

  private isEditable: boolean;

  constructor(private router: Router, private userService: UserInfoService) { }

  ngOnInit() {
    this.isEditable = this.userService.getUserInfo() && this.itemInfo.id === 'custom';
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
