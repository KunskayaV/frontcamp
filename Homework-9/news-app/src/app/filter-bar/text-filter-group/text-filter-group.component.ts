import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-filter-group',
  templateUrl: './text-filter-group.component.html',
  styleUrls: ['./text-filter-group.component.css']
})
export class TextFilterGroupComponent implements OnInit {

  private inputFilter: string = '';
  constructor() { }

  ngOnInit() {
  }

  getInputValue(value:string) {
    this.inputFilter = value;
  }

  filterList() {
    console.log('filter', this.inputFilter);
  }
}
