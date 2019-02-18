import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'lodash';

import { UserInfoService } from './../../user-info.service';
import { SourceItem } from '../filter-bar.model';
import { FilterBarService } from '../filter-bar.service';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements OnInit {
  protected isUserLogged: boolean;

  public dropdownItems: SourceItem[] =[];
  protected dropdownTitle: string = 'Select Source';
  protected showOnlyMyNews: boolean = false;
  protected subscriptions: any[] = [];

  constructor(
    private filterBarService: FilterBarService,
    private router: Router,
    private userInfoService: UserInfoService,
  ) { }

  ngOnInit() {
    this.dropdownItems = this.filterBarService.getSources();
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

  addArticle() {
    this.router.navigate(['./news', 'newitem', 'edit']);
  }

  setIsChecked(value: boolean) {
    this.filterBarService.setCustomFilter(value);
    this.filterBarService.applyFilters();
  }

  sourcePicked(index: number) {
    this.filterBarService.setPickedSource(index);
    this.dropdownTitle = this.filterBarService.getPickedSource();
  }
}
