const db = require('./dataBase');

module.exports = function connectDB () {
  db.sync();
};