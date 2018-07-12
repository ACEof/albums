function main(app) {
  app.get('/',(req, res) => {
    if (req.session.passport) {
      return res.redirect('/albums');
    }
    res.render('home');
  });
}

module.exports = main;