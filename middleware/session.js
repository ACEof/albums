const cookieSession = require('cookie-session');

module.exports = function sessions(app) {
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
};