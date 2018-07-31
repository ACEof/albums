const Sequelize = require('sequelize');
const db = require('./index');

const Photos = db.define('photos',
  {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    photoname: Sequelize.STRING(100),
    albumid: Sequelize.INTEGER,
  });

function createPhoto (albumID, name) {
  Photos
    .create({albumid: albumID, photoname: name});
}

module.exports = {Photos, createPhoto};