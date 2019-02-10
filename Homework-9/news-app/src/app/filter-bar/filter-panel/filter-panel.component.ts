import { Component, OnInit, Input } from '@angular/core';
import { SourceItem } from '../filter-bar.model';
import { FilterBarService } from '../filter-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements OnInit {
  @Input() userIsLogged: boolean;

  public dropdownItems: SourceItem[] =[];
  private showOnlyMyNews: boolean = false;

  constructor(private FilterBarService: FilterBarService, private router: Router) { }

  ngOnInit() {
    this.dropdownItems = this.FilterBarService.getSources();
  }

  addArticle() {
    this.router.navigate(['./news', 'newitem', 'edit']);
    console.log('Add article');
  }

  setIsChecked(value: boolean) {
    this.showOnlyMyNews = value;
    console.log('show only my news', this.showOnlyMyNews);
  }

  sourcePicked(index: number) {
    console.log('picked source on index', index);
  }
}
