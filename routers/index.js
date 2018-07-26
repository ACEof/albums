const main = require('./main');
const auth = require('./auth'); 
const albums = require('./albums');
const addAlbums = require('./add-album');
const logOut = require('./logout');
const deleteAlbum = require('./delete-album');
const renameAlbum = require('./rename-album');
const showAlbum = require('./show-album');

module.exports = function routers (app) {
  main(app);
  auth(app);
  albums(app);
  addAlbums(app);
  deleteAlbum(app);
  renameAlbum(app);
  logOut(app);
  showAlbum(app);
};