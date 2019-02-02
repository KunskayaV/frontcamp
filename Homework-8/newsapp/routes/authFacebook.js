const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const express = require('express');

const db = require('../database');

const router = express.Router();

passport.use(new FacebookStrategy({
  clientID: 2034695906643505, // registered
  clientSecret: 'ee6e51db4a6636023b9e2d27b1d1724f', // registered
  callbackURL: 'http://localhost:3000/v3/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'email'],
},
function(accessToken, refreshToken, profile, done) {
  const { id, displayName, email } = profile;
  const callback = (err, [user]) => {
    if (err) return done(err);
    if (user) {
      done(null, user);
    } else {
      db.addUserDB({
        username: displayName,
        password: 'some password',
        email: email|| 'email@domain.com',
        facebookId: id,
      }); // user registration for first wrong request
      done(null, false); 
    }
  }
  
  db.findInDataBase({
    collectionName: 'users',
    query: { facebookId: id },
    callback,
  });
}
));

passport.serializeUser(function(user, done) {
  done(null, user.facebookId);
});

router.get('/', passport.authenticate('facebook'));

router.get('/callback', passport.authenticate('facebook', { failureFlash: true }),
  function(req, res) {
    res.redirect('/v3/news');
  }
);

module.exports = router;
