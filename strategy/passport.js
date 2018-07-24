const passport = require('passport');

module.exports = function initializePassport (app){
  app.use(passport.initialize());
  app.use(passport.session()); 
};