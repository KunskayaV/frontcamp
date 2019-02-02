const { size, head } = require('lodash');
const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const express = require('express');

const db = require('../database');
const router = express.Router();

passport.use(new BasicStrategy(
  { passReqToCallback: true },
  function(req, username, password, done) {
    const callback = (err, [user]) => {
      if (err) return done(err);

      if (user && user.password === password) {
        done(null, req);
      } else {
        done(null, false); 
        db.addUserDB({ username, password, email: 'email@domain.com' }); // user registration for first wrong request
      }
    }
    
    db.findInDataBase({
      collectionName: 'users',
      query: { username },
      callback,
    });
  }
));

/* GET register page. */
router.route('/')
  .get(function(req, res) {
    res.render('register');
  })

module.exports = router;
