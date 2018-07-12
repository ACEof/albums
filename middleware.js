const cookieSession = require('cookie-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const handlebars = require('express-handlebars').create({defaultLayout: 'main'});
require('dotenv').config();
const User = require('./models/users');
const db = require('./models/dataBase');
const parser = require('./parser');

module.exports = function midleware(app, express){
  connectDB();
  setStrategy();
  initializeHandlebars(app);
  initializePassport(app);
  initializeSession(app);
  initializeStatic(app, express);
  routers(app);
  parser(app);
};

function initializeHandlebars(app) {  
  app.engine('handlebars', handlebars.engine);
  app.set('view engine', 'handlebars');
}

function initializePassport(app) {
  app.use(passport.initialize());
  app.use(passport.session()); 
}

function initializeSession(app) {
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
}

function initializeStatic (app, express) {
  app.use(express.static('static'));
  app.use('/static', express.static('static'));
}

function setStrategy() {
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
}

function routers(app) {
  app.get('/auth/google',
    passport.authenticate('google', { successRedirect: '/',scope:
  [ 'https://www.googleapis.com/auth/userinfo.email' ] 
    }));

  app.get('/auth/google/callback',
    passport.authenticate( 'google', {
      successRedirect: '/',
      failureRedirect: '/auth/google', 
    }));

  app.get('/',(req, res) => {
    if (req.session.passport) {
      return res.redirect('/albums');
    }
    res.render('home');
  });

  app.get('/albums', (req, res) => {
    if (req.session.passport) {
      findOrCreateUser(req.session.passport.user.displayName);
      return res.render('albums', {name: req.session.passport.user.displayName});
    }  
    res.redirect('/auth/google');
  });

  app.get('/add-albums', (req, res) => {
    res.render('add-albums');
  });

  app.get('/logout',(req, res) => {
    req.session = null;
    res.redirect('/');
  });
}

function connectDB(){
  db.sync();
}

function findOrCreateUser(name){
  User
    .findOrCreate({where:{username:name}})
    .spread((user, created) => {
      console.log(user.get({
        plain: true
      }));
      console.log(created);
    });
}