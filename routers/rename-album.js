const bodyParser = require('body-parser');
const Albums = require('../models/albums');

const urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function deleteAlbum(app) {
  app.post('/rename-*', urlencodedParser, (req, res) => {
    if (!req.body) {
      return res.sendStatus(400);
    }

    let oldTitle = req.url.substr(8);
    let newTitle = req.body.newTitle;

    Albums.renameAlbum(oldTitle, newTitle);
    res.redirect('/show-album-' + newTitle);
  });
};