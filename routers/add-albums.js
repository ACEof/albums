function addAlbums (app) {
  app.get('/add-albums', (req, res) => {
    res.render('add-albums');
  });
}

module.exports = addAlbums;

