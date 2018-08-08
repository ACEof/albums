const Photos = require('../models/photos');

module.exports = function (app) {
  app.get('/delete-photo-*', (req, res) => {
    let photoName = req.url.substr(14);
    fs.unlink('static/uploads/' + photoName);
    Photos.deletePhoto(photoName);
    res.redirect('/');
  });
};