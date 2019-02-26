import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'lodash';

import { UserInfoService } from './../../user-info.service';
import { SourceItem } from '../filter-bar.model';
import { FilterBarService } from '../filter-bar.service';
import { EditPageService } from 'src/app/pages/edit-news-page/edit-page.service';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements OnInit {
  public isUserLogged: boolean;

  public showOnlyMyNews: boolean;
  protected subscriptions: any[] = [];

  constructor(
    private filterBarService: FilterBarService,
    private router: Router,
    private userInfoService: UserInfoService,
    private editPageService: EditPageService,
  ) { }

  ngOnInit() {
    this.filterBarService.fetchSources();
    this.showOnlyMyNews = this.filterBarService.getCustomFilter();
    this.isUserLogged = this.userInfoService.getUserInfo();
    this.subscriptions.push(
      this.userInfoService.updateIsUserLoggedStatus.subscribe(
        isUserLogged => this.isUserLogged = isUserLogged,
      ),
    );
  }

  get dropdownItems(): SourceItem[] {
    return this.filterBarService.getSources();
  }

  get dropdownTitle(): SourceItem[] | string {
    return this.filterBarService.getPickedSourceName() || 'Select Source';
  }

  ngOnDestroy() {
    map(this.subscriptions, subscription => subscription.unsubscribe());
  }

  addArticle() {
    this.editPageService.setEditItem(undefined);
    this.router.navigate(['./news', 'newitem', 'edit']);
  }

  setIsChecked(value: boolean) {
    this.filterBarService.setCustomFilter(value);
    this.filterBarService.applyFilters();
  }

  sourcePicked(index: number) {
    this.filterBarService.setPickedSource(index);
  }
}
