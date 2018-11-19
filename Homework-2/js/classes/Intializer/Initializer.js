import DomStore from './DomStore';

class Initializer extends DomStore {
  constructor(api, renderer) {
    super();
    this.initialize(this.getSources, this.setSource);
    this.api = api;
    this.renderer = renderer;
  }

  async getData(apiMethod, text, rootToHide, ...data) {
    this.renderer.showPreload(this.preloadRoot, text, rootToHide);
    const response = await this.api[apiMethod](...data);
    this.renderer.hidePreload(this.preloadRoot);

    if (response.error) {
      this.renderer.showError(this.errorRoot);
    }
  
    return response;
  }

  setSource(e) {
    if (e.target && e.target.dataset.source) {
      this.getNewsPortion(e.target.dataset.source);
    }
  }

  async getNewsPortion(source) {
    const { error, articles } = await this.getData('getNews', 'news', this.sourcesContainter, source);

    if (!error) {
      this.renderer.renderNews(this.newsRoot, articles, this.newsContainter, this.sourcesContainter);
    }
  }

  async getSources() {
    const { error, sources } = await this.getData('getSources', 'sources', this.newsContainter);

    if (!error) {
      this.renderer.renderSources(this.sourcesRoot, sources, this.sourcesContainter, this.newsContainter);
    }
  }
}

export default Initializer;