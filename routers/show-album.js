const Albums = require('../models/albums');
const Photos = require('../models/photos');
const im = require('imagemagick');

function showAlbum(app) {
  app.get('/show-album-*', async (req, res) => {
    let title = req.url.substr(12);
    let albumID = await Albums.selectAlbumID(title);
    let photoName = await Photos.selectPhotoName(albumID[0].id);
    let renderPhotos = {};

    for (const i in photoName) {
      renderPhotos[i] = photoName[i].photoname;
    }

    res.render('show-album', {albumTitle: title, headTitle: title, photos: renderPhotos});
  });
}

module.exports = showAlbum;