import { Observable } from '../utils';

export default class Model {
  constructor(api) {
    this.subscriber = new Observable();
    this.api = api;
  }

  async dataLoader(apiMethod, text, ...data) {
    this.subscriber.notifyObservers('dataLoadingStart', text);
    const response = await this.api[apiMethod](...data)
      .catch(() => {
        this.subscriber.notifyObservers('dataReceivingError');
        
        return { error: true };
      });
      this.subscriber.notifyObservers('dataLoadingEnd');

    return response;
  }

  getNewsBySource(e) {
    if (e.target && e.target.dataset && e.target.dataset.source) {
      this.getNewsPortion(e.target.dataset.source);
    }
  }

  async getNewsPortion(source) {
    const { error, articles } = await this.dataLoader('getNews', 'news', source)

    if (!error) {
      this.subscriber.notifyObservers('newsReceived', articles);
    }
  }

  async getSources() {
    const { error, sources } = await this.dataLoader('getSources', 'sources')

    if (!error) {
      this.subscriber.notifyObservers('sourcesReceived', sources);
    }
  }
}
