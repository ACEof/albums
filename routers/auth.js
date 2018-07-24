const passport = require('passport');

function auth(app) {
  app.get('/auth/google',
    passport.authenticate('google', { successRedirect: '/',scope:
  [ 'https://www.googleapis.com/auth/userinfo.email' ] 
    }));

  app.get('/auth/google/callback',
    passport.authenticate( 'google', {
      successRedirect: '/',
      failureRedirect: '/auth/google', 
    }));
}

module.exports = auth;

