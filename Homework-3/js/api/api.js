import { request } from '../client';

class API {
  constructor(endpoint, key, statusOk) {
    this.endpoint = endpoint;
    this.apiKey = key;
    this.statusOk = statusOk;
  }

  async getInfoFromEndpoint(path = '', additionalParams = {}) {
    const response = await request(
      this.endpoint,
      path,
      Object.assign({ 'apiKey': this.apiKey }, additionalParams)
    );

    if (response.status !== this.statusOk) {
      throw Error();
    }

    return response;
  }

  async getNews(source) {
    const response = await this.getInfoFromEndpoint(
      'top-headlines',
      { 'sources': source },
    );
  
    return response;
  }

  async getSources() {
    const response = await this.getInfoFromEndpoint('sources');
  
    return response;
  }
}

export default API;
