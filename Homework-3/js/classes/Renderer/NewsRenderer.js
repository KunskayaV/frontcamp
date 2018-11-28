import Renderer from './Renderer';
import * as templates from './templates';

import '../../../css/news.scss';

export default class NewsRenderer extends Renderer {
  renderNews(newsRoot, cardsInfo, rootToShow, rootToHide) {
    rootToHide.style.display = 'none';
    rootToShow.style.display = 'block';
    this.fillRoot(newsRoot, cardsInfo, templates.newsTemplate);
  }
};
