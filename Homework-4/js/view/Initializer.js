import DomStore from './DomStore';

class Initializer extends DomStore {
  constructor(model, renderer) {
    super();
    this.renderer = renderer;

    model.subscriber.subscribe('dataReceivingError', this.showError.bind(this));
    model.subscriber.subscribe('dataLoadingStart', this.showPreload.bind(this));
    model.subscriber.subscribe('dataLoadingEnd', this.hidePreload.bind(this));
    model.subscriber.subscribe('newsReceived', this.renderNews.bind(this));
    model.subscriber.subscribe('sourcesReceived', this.renderSources.bind(this));
  }

  showError() {
    this.renderer.showError(this.errorRoot);
  }

  showPreload(...data) {
    this.renderer.showPreload(this.preloadRoot, ...data, this.newsContainter, this.sourcesContainter);
  }

  hidePreload() {
    this.renderer.hidePreload(this.preloadRoot);
  }

  renderNews(data) {
    this.renderer.renderNews(this.newsRoot, data, this.newsContainter, this.sourcesContainter);
  }

  renderSources(data) {
    this.renderer.renderSources(this.sourcesRoot, data, this.sourcesContainter, this.newsContainter);
  }
}

export default Initializer;