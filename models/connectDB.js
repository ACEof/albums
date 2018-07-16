const db = require('./index');

module.exports = function connectDB () {
  db.sync();
};