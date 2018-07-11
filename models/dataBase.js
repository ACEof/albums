const Sequelize = require('sequelize');
require('dotenv').config();

const db = new Sequelize( process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: true,
  operatorAliases: false,
  ssl: true,
  dialectOptions: {
    ssl: true
  }
});

module.exports = db;