import { Injectable, EventEmitter } from '@angular/core';
import { SourceItem } from './filter-bar.model';

@Injectable({
  providedIn: 'root'
})

export class FilterBarService {

  protected sources: SourceItem[] = [
    { id: 0, title: 'All sources' },
    { id: 1, title: 'source 1' },
    { id: 2, title: 'source 2' },
    { id: 3, title: 'source 3' },
    { id: 4, title: 'source 4' },
    { id: 5, title: 'source 5' },
    { id: 6, title: 'source 6' },
  ];

  protected pickedSource: string;
  protected filterText: string = '';
  private showOnlyMyNews: boolean = false;
  public apply: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.pickedSource = this.sources[0].title;
  }

  public getSources(): SourceItem[] {
    return this.sources;
  }

  public getPickedSource(): string {
    return this.pickedSource;
  }

  setPickedSource(index: number) {
    this.pickedSource = this.sources[index].title;
  }

  getCustomFilter(): boolean {
    return this.showOnlyMyNews;
  }

  setCustomFilter(value: boolean) {
    this.showOnlyMyNews = value;
  }

  getTextFilter(): string {
    return this.filterText;
  }

  setTextFilter(value: string) {
    this.filterText = value;
  }

  applyFilters() {
    this.apply.emit({
      textFilter: this.filterText,
      customFilter: this.showOnlyMyNews,
    })
  }
}
