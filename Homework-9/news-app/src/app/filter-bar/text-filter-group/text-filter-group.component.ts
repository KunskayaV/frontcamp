import { FilterBarService } from './../filter-bar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-filter-group',
  templateUrl: './text-filter-group.component.html',
  styleUrls: ['./text-filter-group.component.css']
})
export class TextFilterGroupComponent implements OnInit {
  private filterText: string = '';
  constructor(private filterService: FilterBarService) { }

  ngOnInit() {
  }

  filterList() {
    this.filterService.setTextFilter(this.filterText);
    this.filterService.applyFilters();
  }
}
