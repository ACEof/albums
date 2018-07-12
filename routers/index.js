const main = require('./main');
const auth = require('./auth'); 
const albums = require('./albums');
const addAlbums = require('./add-albums');
const logOut = require('./logout');
const add = require('./add');

module.exports = function routers (app) {
  main(app);
  auth(app);
  albums(app);
  addAlbums(app);
  add(app);
  logOut(app);
};