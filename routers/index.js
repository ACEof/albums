const main = require('./main');
const auth = require('./auth'); 
const albums = require('./albums');
const addAlbums = require('./add-album');
const logOut = require('./logout');
const deleteAlbum = require('./delete-album');
const renameAlbum = require('./rename-album');
const showAlbum = require('./show-album');
const uploadPhoto = require('./upload-photo');
const showBigPhoto = require('./show-big-photo');
const deletePhoto = require('./delete-photo');

module.exports = function routers (app) {
  main(app);
  auth(app);
  albums(app);
  addAlbums(app);
  deleteAlbum(app);
  renameAlbum(app);
  logOut(app);
  showAlbum(app);
  uploadPhoto(app);
  showBigPhoto(app);
  deletePhoto(app);
};