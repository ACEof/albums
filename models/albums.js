const Sequelize = require('sequelize');
const db = require('./index');

const Albums = db.define('albums', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  album_title: Sequelize.STRING,
  user_id: Sequelize.INTEGER
});

module.exports = Albums;