const handlebars = require('express-handlebars').create({defaultLayout: 'main'});
require('dotenv').config();

module.exports = function initializeHandlebars (app) {
  app.engine('handlebars', handlebars.engine);
  app.set('view engine', 'handlebars');
};