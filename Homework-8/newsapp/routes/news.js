const express = require('express');
const passport = require('passport');
const router = express.Router();

const db = require('../database');

/* GET news page. */
/* POST news page. */
router.route('/')
  .get(
    function(req, res) {
      const callback = (err, news) => {
        if (err) res.status(400).send('Something went wrong');

        if (news.length) {
          res.status(200).json(news);
        } else {
          res.status(200).send('Empty news collection');
        }
      };

      db.findInDataBase({ collectionName: 'news', callback });
    }
  )
  .post(function(req, res) {
    db.addNewsDB(req.body)
      .then(
        () => res.status(200).send('News succesfully added'),
        err => res.status(403).send(err)
      );
  });

/* GET news page by :id */
/* POST news page by :id */
/* PUT news page by :id */
/* DELETE news pag eby :id */
router.route('/:newsId')
  .get(function(req, res, next) {
      const callback = (err, news) => {
        if (err) res.status(400).send('Something went wrong');

        if (news.length) {
          res.status(200).json(news);
        } else {
          res.status(404).send('News with specified id doesn\'t exist');
        }
      };

      db.findInDataBase({
        collectionName: 'news',
        query: { id: req.params.newsId },
        callback,
      });
  })
  .post(
    passport.authenticate('basic', {
      session: false,
      failureRedirect: '/v3/register',
    }),
    function(req, res) {
      const callback = (err, news) => {
        if (err) {
          res.status(400).send('Something went wrong');
          return;
        }
        res.status(204).send('News updated');
      };

      db.updateInDataBase({
        collectionName: 'news',
        query: {id: req.params.newsId },
        data: req.body,
        callback,
      });
    }
  )
  .put(function(req, res) {
    db.addNewsDB({ ...req.body, id: req.params.newsId })
      .then(
        () => res.status(200).send('News succesfully added'),
        err => res.status(403).send(err)
      );
  })
  .delete(
    passport.authenticate('basic', {
      session: false,
      failureRedirect: '/v3/register',
    }),
    function(req, res) {
      const callback = (err, news) => {
        if (err) res.status(404).send('Something went wrong');

        res.status(204).send('News succesfully removed');
      };

      db.deleteFromDatabase({
        collectionName: 'news',
        options: { id: req.params.newsId },
        callback
      });
    }
  );

module.exports = router;
