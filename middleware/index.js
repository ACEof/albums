const handlebars = require('./handlebars');
const session = require('./session');
const initializeStatic = require('./static');
const connectDb = require('../models/connectDB');
const googleStrategy = require('../strategy/googleStrategy');
const initializePassport = require('../strategy/passport');
const routers = require('../routers/index');

module.exports = function middleware(app, express) {
  connectDb();
  googleStrategy();
  initializePassport(app);
  handlebars(app);
  session(app);
  initializeStatic(app, express);
  routers(app);
};