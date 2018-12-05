class DomStore {
  initialize(sourceButtonListener, sourceListener) {
    document.addEventListener(
      'DOMContentLoaded',
      this.bindListeners.bind(this, sourceButtonListener, sourceListener)
    );
  }

  bindListeners(sourceButtonListener, sourceListener) {
    this.newsContainter = document.getElementById('news');
    this.newsRoot = document.getElementById('newsroot');
    this.sourcesContainter = document.getElementById('sources');
    this.sourcesRoot = document.getElementById('sourcesroot');
    this.sourceButton = document.getElementById('source-button');
    this.preloadRoot = document.getElementById('preloadroot');
    this.errorRoot = document.getElementById('error');

    this.sourceButton.addEventListener('click', sourceButtonListener.bind(this));
    this.sourcesRoot.addEventListener('click', sourceListener.bind(this))
  }

}

export default DomStore;