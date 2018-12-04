import RequestsFactory from '../clientFactory';

class API {
  constructor(endpoint, key, statusOk) {
    this.endpoint = endpoint;
    this.apiKey = key;
    this.statusOk = statusOk;

    const requestsFactoryInstance = (new RequestsFactory()).getInstance();
    this.topHeadlinersRequester = requestsFactoryInstance.createRequester(endpoint, 'top-headlines');
    this.sourceRequester = requestsFactoryInstance.createRequester(endpoint, 'sources');
  }

  async getInfoFromEndpoint(requestor, additionalParams = {}) {
    const response = await requestor.get(Object.assign({ 'apiKey': this.apiKey }, additionalParams));

    if (response.status !== this.statusOk) {
      throw Error();
    }

    return response;
  }

  async getNews(source) {
    const response = await this.getInfoFromEndpoint(
      this.topHeadlinersRequester,
      { 'sources': source },
    );
  
    return response;
  }

  async getSources() {
    const response = await this.getInfoFromEndpoint(this.sourceRequester);
  
    return response;
  }
}

export default API;
