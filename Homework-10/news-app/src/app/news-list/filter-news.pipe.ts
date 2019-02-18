import { Pipe, PipeTransform } from '@angular/core';
import { includes, filter, toLower } from 'lodash';

import { NewsItem } from './news-item.model';

@Pipe({
  name: 'filterNews'
})
export class FilterNewsPipe implements PipeTransform {

  transform(newsArray: NewsItem[], textfilter: string, authorFilter: boolean): any {
    return filter(
      newsArray,
      news => includes(toLower(news.title), toLower(textfilter)) && (!authorFilter || news.id === 'custom')
    );
  }

}
