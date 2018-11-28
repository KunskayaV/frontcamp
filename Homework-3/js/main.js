import API from './api';
import { Initializer, Renderer } from './classes';
import { NEWS_ENDPOINT, API_KEY, STATUS_OK } from './config/constants'; 

const api = new API(NEWS_ENDPOINT, API_KEY, STATUS_OK);
const renderer = new Renderer();
new Initializer(api, renderer);
