const User = require('../models/users');

module.exports = function albums (app) {
  app.get('/albums', (req, res) => {
    if (req.session.passport) {
      findOrCreateUser(req.session.passport.user.displayName);
      return res.render('albums', {name: req.session.passport.user.displayName});
    }  
    res.redirect('/auth/google');
  });
};

function findOrCreateUser(name){
  User
    .findOrCreate({where:{username:name}});
}

