const User = require('../models/users');
const Album = require('../models/albums');

module.exports = function albums (app) {
  app.get('/albums', async (req, res) => {    
    if (req.session.passport) {
      User.findOrCreateUser(req.session.passport.user.displayName);
      const userID = await User.findUserId(req.session.passport.user.displayName);
      const albumTitle = await Album.selectAlbumTitle(userID[0].id);
      const renderAlbumTitle = {};
      
      for(const i in albumTitle){
        renderAlbumTitle[i] = albumTitle[i].albumtitle;
      }
      
      return res.render('albums', {name: req.session.passport.user.displayName, title: renderAlbumTitle});
    }
    res.redirect('/auth/google');
  });
};