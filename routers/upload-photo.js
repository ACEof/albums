const multer = require('multer');
const upload = multer({dest: 'uploads/'});

module.exports = function uploadPhoto(app) {
  app.post('/upload-photo', upload.single('photo'), (req, res) => {
    if (!req.file) {
      return res.send('error, no file selected');
    }
    res.redirect('/');
  });
};