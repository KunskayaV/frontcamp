import { request } from '../client';
import { NEWS_ENDPOINT, API_KEY, STATUS_OK } from './constants'; 

class API {
  async getInfoFromEndpoint(path = '', additionalParams = {}) {
    const response = await request(
      NEWS_ENDPOINT,
      path,
      Object.assign({ 'apiKey': API_KEY }, additionalParams)
    );

    if (response.status !== STATUS_OK) {
      Object.assign(response, { error: true });
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
