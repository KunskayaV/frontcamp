import API from './api';
import { Initializer, AppRenderer } from './classes';
import { NEWS_ENDPOINT, API_KEY, STATUS_OK } from './config/constants'; 
/* const json = require('./file.json');

console.log('json', json) */
const api = new API(NEWS_ENDPOINT, API_KEY, STATUS_OK);
const renderer = new AppRenderer();
new Initializer(api, renderer);

