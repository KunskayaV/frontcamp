import { toQueryString, proxifyLogsForMethodCalls } from '../utils';

export default class RequestsFactory {
  static instance = null;

  constructor() {
    this.requesters = [];
  }

  getInstance() {
    if (!RequestsFactory.instance) {
      RequestsFactory.instance = this;
    }

    return RequestsFactory.instance;
  }

   createRequester(url, path) {
    const fullPath = `${url}${path && `/${path}`}`;

    this.requesters[fullPath] = this.requesters[fullPath] || {
      get: async (params) => {
        try {
          const response = await fetch(`${fullPath}${toQueryString(params)}`);
      
          return response.json();
        } catch(e) {
          console.log('Someting went wrong during request', e.message);
          return { error: true };
        }
      },
      post: ({ body = {}, headers = {} }) => fetch(fullPath, { method: 'POST', headers, body } ),
      put: ({body = {}, headers = {} }) => fetch(fullPath, { method: 'PUT', headers, body } ),
      delete:  ({ body = {}, headers = {} }) => fetch(fullPath, { method: 'DELETE', headers, body } )
    };

    return proxifyLogsForMethodCalls(this.requesters[fullPath], `Requestor to path: ${fullPath}`);
  }

  removeRequester(url, path) {
    const fullPath = `${url}${path && `/${path}`}`;

    delete this.requesters[fullPath];
  }
}