const express = require('express');

const setup = require('./config');
const addMiddlewares = require('./middlewares');
const { connectToDatabase } = require('./database');

const app = express();
setup(app);
addMiddlewares(app);

connectToDatabase('mongodb://localhost:27017/frontcamp');

module.exports = app;
