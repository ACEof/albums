const bodyParser = require('body-parser');
const Album = require('../models/albums');
const User = require('../models/users');

const urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function addAlbumTitleIntoDB(app) {
  app.post('/add', urlencodedParser, (req, res) => {
    if (!req.body) {
      return res.sendStatus(400);
    }
    
    User.findUserId(req.session.passport.user.displayName)
      .then((id) => {
        Album.createAlbum(req.body.albumTitle, id[0].id);
      });

    res.redirect('/albums');  
  });
};