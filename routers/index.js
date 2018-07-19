const main = require('./main');
const auth = require('./auth'); 
const albums = require('./albums');
const addAlbums = require('./add-albums');
const logOut = require('./logout');
const addAlbumTitleIntoDB = require('./add-album-title');
const renameAlbum = require('./rename-album');

module.exports = function routers (app) {
  main(app);
  auth(app);
  albums(app);
  addAlbums(app);
  addAlbumTitleIntoDB(app);
  renameAlbum(app);
  logOut(app);
};