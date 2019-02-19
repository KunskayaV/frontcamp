import { Injectable, EventEmitter } from '@angular/core';

import { SourceItem } from './filter-bar.model';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})

export class FilterBarService {

  protected sources: SourceItem[] = [];

  protected pickedSource: SourceItem;
  protected filterText: string = '';
  private showOnlyMyNews: boolean = false;
  public apply: EventEmitter<any> = new EventEmitter<any>();
  public sourceShanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(private apiService: ApiService) {}

  public fetchSources() {
    return this.apiService.fetchSources()
      .subscribe(
        response => {
          this.sources = response;
          this.pickedSource = this.sources[0];
          this.sourceShanged.emit(this.pickedSource.id);
        },
        error => console.log(error)
      );
  }

  getSources(): SourceItem[] {
    return this.sources;
  }

  public getPickedSourceName(): string {
    return this.pickedSource && this.pickedSource.name;
  }

  setPickedSource(index: number) {
    this.pickedSource = this.sources[index];
    this.sourceShanged.emit(this.pickedSource.id);
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
