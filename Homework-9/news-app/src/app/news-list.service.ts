import { Injectable } from '@angular/core';
import { map } from 'lodash';

import { dateToLocaleString } from 'src/app/helpers';
import { NewsItem } from './news-list/news-item.model';


@Injectable({
  providedIn: 'root'
})
export class NewsListService {

  constructor() { }

  public getNews(): NewsItem[] {
    return map(
      [
        {
          id: 'custom',
          author: 'Vasia Pupkin',
          title: 'Cyber Insurance Not Valid in Case of Cyber War, Says Major Insurance Company',
          description: 'Multinational companies that have been purchasing cyber insurance policies to cover themselves in case of malware attacks and cyber hacks might want to read the fine print in their policies. In what is shaping up to be a major test case for the entire cyber i…',
          urlToImage: "https://images.wsj.net/im-52844/social",
          publishedAt: "2019-02-10T15:12:00Z",
          content: 'Makers of household staples started raising prices last year on diapers, toilet paper and trash bags to offset higher commodity costs and boost profits. Some of those increases have yet to show up on store shelves, but executives are promising to raise even m… [+200 chars]',
        },
        {
          id: '2',
          author: 'Nicole Lindsey',
          title: 'The Salt - NPR',
          description: 'Vegetable-based dishes may be better for the Earth but don\'t always sound seductive on menus. Marketers, researchers and food chains think they know how to get meat lovers to make the swap more often.',
          urlToImage: "https://media.npr.org/assets/img/2019/02/08/vegan-burger-1_wide-0c7396444714607406752e34c873bc760dab0616.jpg?s=1400",
          publishedAt: "2019-02-10T12:00:00Z",
          content: "Focusing less on the meat-free or health aspects of plant-based dishes, like this jackfruit burger and more on their flavor, mouthfeel and provenance could go a long way toward getting meat lovers to choose these options more often. That's according to resear… [+5717 chars]",
        },
        {
          id: '3',
          author: "Reuters Editorial",
          title: "Saudi Arabia says has 'nothing to do' with Bezos-AMI dispute - Reuters",
          description: "Saudi Arabia had \"absolutely nothing to do\" with the National Enquirer's reporting on an extramarital relationship involving Amazon.com Inc Chief Executive Jeff Bezos, the kingdom's minister of state for foreign affairs said.",
          urlToImage: "https://s2.reutersmedia.net/resources/r/?m=02&d=20190210&t=2&i=1355097331&w=1200&r=LYNXNPEF1909H",
          publishedAt: "2019-02-10T11:55:00Z",
          content: "DUBAI (Reuters) - Saudi Arabia had “absolutely nothing to do” with the National Enquirer’s reporting on an extramarital relationship involving Amazon.com Inc Chief Executive Jeff Bezos, the kingdom’s minister of state for foreign affairs said. Bezos on Thursd… [+1338 chars]"
        },
      ],
      item => ({ ...item, publishedAt: dateToLocaleString(item.publishedAt) })
    );
  }
}
