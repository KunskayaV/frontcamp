const express = require('express');

const setup = require('./config');
const addMiddlewares = require('./middlewares');

const app = express();
setup(app);
addMiddlewares(app);

module.exports = app;
