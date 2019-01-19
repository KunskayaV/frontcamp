const express = require('express');
const router = express.Router();
const createError = require('http-errors');

const news = require('../bin/data/news.json');
const { checkNews, getNewsById } = require('../bin/helpers');

/* GET news page. */
/* POST news page. */
router.route('/')
  .get(function(req, res) {
    res.json(news);
  })
  .post(function(req, res) {
    const news = req.body;
    const allRequiredFieldsPresent = news.every(checkNews);

    if(allRequiredFieldsPresent) {
      res.status(200).send('News succesfully added');
    } else {
      res.status(400).send('Please specify all required fields of the news (id, name, description, url)');
    }
  });

/* GET news page by :id */
/* POST news page by :id */
/* PUT news page by :id */
/* DELETE news pag eby :id */
router.route('/:newsId')
  .get(function(req, res, next) {
    const newsById = getNewsById(news.sources, req.params.newsId);

    if (!newsById) {
      res.status(404).send('News with specified id doesn\'t exist');
    }

    res.json(newsById);
  })
  .post(function(req, res) {
    const allRequiredFieldsPresent = checkNews([news]);

    if(allRequiredFieldsPresent) {
      res.status(200).send('News succesfully added');
    } else {
      res.status(400).send('Please specify all required fields of the news (id, name, description, url)');
    }
  })
  .put(function(req, res) {
    const allRequiredFieldsPresent = checkNews([news]);

    if(allRequiredFieldsPresent) {
      res.status(200).send('News succesfully added/repleced');
    } else {
      res.status(400).send('Please specify all required fields of the news (id, name, description, url)');
    }
  })
  .delete(function(req, res) {
    const newsById = getNewsById(news.sources, req.params.newsId);

    if(newsById) {
      res.status(200).send('News succesfully removed');
    } else {
      res.status(404).send('News to delete wasn\'t found');
    }
  });

module.exports = router;
