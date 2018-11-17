import DomStore from './DomStore';

class Initializer extends DomStore {
  constructor(api, renderer) {
    super();
    this.initialize(this.getSources, this.setSource);
    this.api = api;
    this.renderer = renderer;
  }

  setSource(e) {
    if (e.target && e.target.dataset.source) {
      this.getNewsPortion(e.target.dataset.source);
    }
  }

  async getNewsPortion(source) {
    const { error, articles } = await this.api.getNews(source);

    if (!error) {
      this.renderer.renderNews(this.newsRoot, articles, this.newsContainter, this.sourcesContainter);
    }
  }

  async getSources() {
    const { error, sources } = await this.api.getSources();

    if (!error) {
      this.renderer.renderSources(this.sourcesRoot, sources, this.sourcesContainter, this.newsContainter);
    }
  }
}

export default Initializer;