module.exports = function initializeStatic (app, express) {
  app.use(express.static('static'));
  app.use('/static', express.static('static'));
};