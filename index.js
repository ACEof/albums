const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const models = require('./models');
const handlebars = require('express-handlebars')
  .create({defaultLayout: 'main'});
require('dotenv').config();

const app = express();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieSession({
  name: process.env.nameSession,
  secret: process.env.secretSession,
  resave: false,
  saveUninitialized: true,
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  }
}));
app.use(express.static('static'));

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(new GoogleStrategy({
  clientID: process.env.clientID,
  clientSecret: process.env.clientSecret,
  callbackURL: process.env.callbackURL
},
function(accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

app.get('/albums', (req, res, next) => {
  if (req.session.passport) {
    return res.render('albums', {name: req.session.passport.user.displayName});
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

app.get('/',(req, res, next) => {
  if (req.session.passport) {
    return res.redirect('/albums');
    next();
  }
  res.render('home');
});

app.get('/logout',(req, res) => {
  req.session = null;
  res.redirect('/');
});

async () => {
  try {
   const connect = await models.sequelize.sync();
  }
  catch(err){
  }
};

app.listen(process.env.PORT, () => {
  console.log('Server working');
});
