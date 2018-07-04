var Sequelize = require('sequelize');

var sequelize = new Sequelize(process.env.DATABASE_URL);

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;