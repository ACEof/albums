const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize( process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: true,
  operatorAliases: false,
  ssl: true,
  dialectOptions: {
    ssl: true
  }
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;