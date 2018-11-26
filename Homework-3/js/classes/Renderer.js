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

  showPreload(preloadRoot, text, rootToHide) {
    rootToHide.style.display = 'none';
    preloadRoot.hidden = false;
    preloadRoot.style.display = 'flex';


    this.fillRoot(preloadRoot, [{ text }], templates.preloadTemplate);
  }

  hidePreload(preloadRoot) {
    preloadRoot.hidden = true;
    preloadRoot.style.display = 'none';
  }

  showError(errorRoot) {
    errorRoot.classList.add('show');
    setTimeout(() =>errorRoot.classList.remove('show'), 2000);
  }
}

export default Renderer;
