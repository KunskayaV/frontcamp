import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { find } from 'lodash';
 
import { NewsItem } from 'src/app/news-list/news-item.model';
import { NewsListService } from 'src/app/news-list.service';
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
  private isEditable: boolean;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsList: NewsListService,
    private userService: UserInfoService
  ) {
    this.paramsSubscribe = this.route.params.subscribe(data => {
      this.routeParams.id = data.id;
    });
  }

  ngOnInit() {
    this.itemInfo = find(this.newsList.getNews(), { id: this.routeParams.id});
    this.isEditable = this.userService.getUserInfo() && this.itemInfo.id === 'custom';
  }

  ngOnDestroy() {
    this.paramsSubscribe.unsubscribe();
  }

  editNews() {
    this.router.navigate(['./news', this.itemInfo.id, 'edit']);
  }

}
