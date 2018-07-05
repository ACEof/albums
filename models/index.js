const Sequelize = require('sequelize');

const sequelize = new Sequelize( process.env.DATABASE_URL);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;