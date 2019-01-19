const express = require('express');
const router = express.Router();
const createError = require('http-errors');

router.use('/', function(req, res, next) {
  next(createError(404, 'Please specify /news route'));
});

module.exports = router;
