import { Injectable } from '@angular/core';
import { SourceItem } from './filter-bar.model';

@Injectable({
  providedIn: 'root'
})
export class FilterBarService {

  constructor() { }

  public getSources(): SourceItem[] {
    return [
      { id: 1, title: 'source 1' },
      { id: 2, title: 'source 2' },
      { id: 3, title: 'source 3' },
      { id: 4, title: 'source 4' },
      { id: 5, title: 'source 5' },
      { id: 6, title: 'source 6' },
    ]
  }
}
