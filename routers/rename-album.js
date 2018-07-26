const bodyParser = require('body-parser');
const Albums = require('../models/albums');

const urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function deleteAlbum(app) {
  app.post('/rename-album', urlencodedParser, (req, res) => {
    if (!req.body) {
      return res.sendStatus(400);
    }

    Albums.renameAlbum(req.body.oldTitle, req.body.newTitle);
    res.redirect('/albums');
  });
};