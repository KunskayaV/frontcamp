import * as templates from '../templates';

class Renderer {
  fillRoot(root, info, template) {
    const toRender = info.map(template);

    root.innerHTML = toRender.join('');
  }

  renderNews(newsRoot, cardsInfo, rootToShow, rootToHide) {
    rootToHide.style.display = 'none';
    rootToShow.style.display = 'block';
    this.fillRoot(newsRoot, cardsInfo, templates.newsTemplate);
  }

  renderSources(sourceRoot, sourcesInfo, rootToShow, rootToHide) {
    rootToHide.style.display = 'none';
    rootToShow.style.display = 'flex';
    this.fillRoot(sourceRoot, sourcesInfo, templates.sourceTemplate);
  }
}

export default Renderer;
