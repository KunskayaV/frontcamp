import API from './api';
import { Initializer, Renderer } from './classes';

const api = new API();
const renderer = new Renderer();
new Initializer(api, renderer);
