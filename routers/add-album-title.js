const bodyParser = require('body-parser');
const Album = require('../models/albums');
const User = require('../models/users');
const db = require('../models/dataBase');

function parser(app) {
  const urlencodedParser = bodyParser.urlencoded({extended: false});

  app.post('/add', urlencodedParser, (req, res) => {
    if (!req.body) {
      return res.sendStatus(400);
    }
    //res.render('albums', {albumTitle: req.body.albumTitle});
    res.redirect('/albums');
    let usid;
    usid = findId(req.session.passport.user.displayName)
    console.log(usid);
  });
}

function createOrFindAlbum(title) {
  Album
    .findOrCreate({where: {albumTitle: title}});
}

const findId = async  (userName) => { 
    const select = await db.query('SELECT id from users where username = ?', 
      { replacements: [userName], type: db.QueryTypes.SELECT})
    console.log(select);
    return select[0].id;
}

module.exports = parser;