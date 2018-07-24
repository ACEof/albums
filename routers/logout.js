function logOut (app) {
  app.get('/logout',(req, res) => {
    req.session = null;
    res.redirect('/');
  });
}

module.exports = logOut;