import Renderer from './Renderer';
import SourceLoader from '../SourceLoader';
import * as templates from './templates';

class AppRenderer {
  constructor() {
    this.renderer = new Renderer();
    this.loader = new SourceLoader();
  }

  renderNews(...args) {
    this.loader.getNewsRenderer()
      .then(newsRenderer => newsRenderer.renderNews(...args));
  }

  renderSources(sourceRoot, sourcesInfo, rootToShow, rootToHide) {
    rootToHide.style.display = 'none';
    rootToShow.style.display = 'flex';
    this.renderer.fillRoot(sourceRoot, templates.sourceTemplate, sourcesInfo);
  }

  showError(errorRoot) {
    this.loader.getErrorRenderer()
      .then(errorRenderer => errorRenderer.renderError(errorRoot));
  }

  showPreload(preloadRoot, text, ...rootsToHide) {
    rootsToHide.forEach(root => root.style.display = 'none');
    preloadRoot.hidden = false;
    preloadRoot.style.display = 'flex';

    this.renderer.fillRoot(preloadRoot, templates.preloadTemplate, [{ text }]);
  }

  hidePreload(preloadRoot) {
    preloadRoot.hidden = true;
    preloadRoot.style.display = 'none';
  }
}

export default AppRenderer;
