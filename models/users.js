const Sequelize = require('sequelize');
const db = require('./index');

const Users = db.define('users',
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    username: Sequelize.STRING(100),
  });

module.exports = Users;