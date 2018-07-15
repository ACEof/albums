const Sequelize = require('sequelize');
const db = require('./dataBase');

const Albums = db.define('albums', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  albumTitle: Sequelize.STRING,
  //userId: Sequelize.INTEGER
});

module.exports = Albums;