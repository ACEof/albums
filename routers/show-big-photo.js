module.exports = function (app) {
  app.get('/photo-*', (req, res) => {
    let photoName = req.url.substr(7);

    res.render('show-big-photo', {photo: photoName, photoDelete: photoName});
  });
};


