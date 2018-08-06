module.exports = function showBigPhoto (app) {
  app.get('/photo-*', (req, res) => {
    let photoName = req.url.substr(7);

    res.render('show-big-photo', {photo: photoName});
  });
};