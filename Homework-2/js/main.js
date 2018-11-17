import * as api from './api';
import { dateToLocaleString } from './utils';

class Initializer {
  constructor() {
    this.news = [];
    this.sources = [];
    document.addEventListener('DOMContentLoaded', this.initialize.bind(this));
  }
  
  initialize() {
    this.newsContainter = document.getElementById('news');
    this.newsRoot = document.getElementById('newsroot');
    this.sourcesContainter = document.getElementById('sources');
    this.sourcesRoot = document.getElementById('sourcesroot');
    this.sourceButton = document.getElementById('source-button');


    this.sourceButton.addEventListener('click', this.getSources.bind(this));
    this.sourcesRoot.addEventListener('click', (e) => {
      if (e.target && e.target.dataset.source) {
        this.getNewsPortion(e.target.dataset.source);
      }
   })
  }

  async getNewsPortion(source) {
    const { status, articles } = await api.getNews(source);
``
    if (status === 'ok') {
      this.sourcesContainter.style.display = 'none';
      this.newsContainter.style.display = 'block';
      this.fillCards(articles);
    }
  }

  async getSources() {
    const { status, sources } = await api.getSources();
    if (status === 'ok') {
      this.sources = sources;
      this.newsContainter.style.display = 'none';
      this.sourcesContainter.style.display = 'flex';
      this.fillSources(sources);
    }
  }

  fillCards(cardsInfo) {
    const cards = cardsInfo.map(
      ({ title, description, url, urlToImage, publishedAt }) => `\
        <div class="card">\
          <img class="card-image" alt="" src="${urlToImage}"/>\
          <div class="overlay"></div>\
          <div class="info">\
            <h3 class="title">${title}</h3>\
            <p class="description">${description}</p>\
            <p class="date">${dateToLocaleString(publishedAt)}</p>\
          </div>\
          <a class="card-link" href="${url}" target="blank"></a>\
        </div>
      </div>`
    );

    this.newsRoot.innerHTML = cards.join('');
  }

  fillSources(sourcesInfo) {
    const sources = sourcesInfo.map(
      ({ name, id }) => `<a class="source" target="blank" data-source="${id}")}">${name}</a>`
    );

    this.sourcesRoot.innerHTML = sources.join('');
  }
}

new Initializer();