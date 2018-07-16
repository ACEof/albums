const bodyParser = require('body-parser');
const Album = require('../models/albums');
const User = require('../models/users');
const db = require('../models/index');
const urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function addAlbumTitleIntoDB(app) {
  app.post('/add', urlencodedParser, (req, res) => {
    if (!req.body) {
      return res.sendStatus(400);
    }
    findUserId(req.session.passport.user.displayName)
      .then((id) => {
        createAlbum(req.body.albumTitle, id[0].id)
      })
    res.redirect('/albums');  
  });
}

function createAlbum(title, id) {
  Album
    .create({album_title: title, user_id: id});
}

const findUserId = async (userName) => {
   const select = await db.query('SELECT id from users where username = ?', 
      { replacements: [userName], type: db.QueryTypes.SELECT})  
    return select;  
}