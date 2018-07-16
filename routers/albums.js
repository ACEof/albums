const User = require('../models/users');
const Album = require('../models/albums');

module.exports = function albums (app) {
  app.get('/albums', (req, res) => {
    if (req.session.passport) {
      User.findOrCreateUser(req.session.passport.user.displayName);
      User.findUserId(req.session.passport.user.displayName)
        .then((id) => {
          Album.selectAlbumTitle(id[0].id)
            .then((select) => {
              console.log(select);
            });
        });
      return res.render('albums', {name: req.session.passport.user.displayName});
    }  
    res.redirect('/auth/google');
  });
};