const bodyParser = require('body-parser');

function parser(app) {
  const urlencodedParser = bodyParser.urlencoded({extended: false});

  app.post('/register', urlencodedParser, (req, res) => {
    if (!req.body) {
      return res.sendStatus(400);
    }
    console.log(req.body.albumTitle);
    res.redirect('/albums');
  });
}

module.exports = parser;