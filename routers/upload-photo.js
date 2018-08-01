const multer = require('multer');
const upload = multer({dest: 'static/uploads/'});
const Albums = require('../models/albums');
const Photos = require('../models/photos');

module.exports = function uploadPhoto(app) {
  app.post('/show-album-*', upload.single('photo'), async (req, res) => {
    if (!req.file) {
      return res.send('error, no file selected');
    }
    let albumTitle = req.url.substr(12);
    const selectID = await Albums.selectAlbumID(albumTitle);
    let albumID = selectID[0].id;
    let photoName = req.file.filename;
    Photos.createPhoto(albumID, photoName);
    res.redirect('/show-album-' + albumTitle);
  });
};