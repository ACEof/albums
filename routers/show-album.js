function showAlbum(app) {
  app.get('/show-album-*', (req, res) => {
    let title = req.url.substr(12);
    res.render('show-album', {albumTitle: title, headTitle: title});
  });
}

module.exports = showAlbum;