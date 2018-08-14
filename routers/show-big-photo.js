const Photos = require('../models/photos');

module.exports = function (app) {
  app.get('/photo-*', async (req, res) => {
    let photoName = req.url.substr(7);
    const albumID = await Photos.selectAlbumId(photoName);
    const photos = await Photos.selectPhotoName(albumID[0].albumid);
    let renderPhotos = {};

    for (const i in photos) {
      renderPhotos[i] = photos[i].photoname;
    }

    res.render('show-big-photo', {photo: photoName, photoDelete: photoName, slides: renderPhotos});
  });
};


