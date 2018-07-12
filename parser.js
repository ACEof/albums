const bodyParser = require('body-parser');
const Album = require('./models/albums');

function parser(app) {
  const urlencodedParser = bodyParser.urlencoded({extended: false});

  app.post('/add', urlencodedParser, (req, res) => {
    if (!req.body) {
      return res.sendStatus(400);
    }
    res.render('albums', {albumTitle: req.body.albumTitle});
    createOrFindAlbum(req.body.albumTitle);
  });
}

function createOrFindAlbum(title) {
  Album
    .findOrCreate({where: {albumTitle: title}});
}

module.exports = parser;