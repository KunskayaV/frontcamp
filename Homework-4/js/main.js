import API from './api';
import { AppRenderer } from './classes';
import { NEWS_ENDPOINT, API_KEY, STATUS_OK } from './config/constants'; 

import Model from './model';
import View from './view';
import Controller from './controller';

const api = new API(NEWS_ENDPOINT, API_KEY, STATUS_OK);
const renderer = new AppRenderer();

const model = new Model(api);
const view = new View(model, renderer);
new Controller(model, view);