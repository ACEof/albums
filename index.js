var express = require('express');
var cookieSession = require('cookie-session');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth2').Strategy;

var app = express();

var port = 3000;

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieSession({
  name: 'session',
  secret: 'my-secret-1234',
  resave: false,
  saveUninitialized: true,
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  }
}));
app.use(express.static('public'));

passport.serializeUser(function(user, done) {
  done(null, user)
});
passport.deserializeUser(function(user, done) {
  done(null, user)
});

passport.use(new GoogleStrategy({
  clientID: process.env.clientID,
  clientSecret: process.env.clientSecret,
  callbackURL: 'http://my-albums1.herokuapp.com/auth/google/callback'
},
function(accessToken, refreshToken, profile, done) {
    return done(null, profile)
}));

app.get('/albums', function (req, res, next) {
  if (req.session.passport) {
    return res.redirect('/albums.html');
    next();
  }  
  res.redirect('/auth/google');
});

app.get('/auth/google',
  passport.authenticate('google', { successRedirect: '/',scope:
    [ 'https://www.googleapis.com/auth/userinfo.email' ] 
}));

app.get('/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/',
    failureRedirect: '/auth/google', 
}));

app.get('/', function (req, res) {
  
});

app.listen(process.env.PORT || port, function () {
  console.log('Server working');
});
