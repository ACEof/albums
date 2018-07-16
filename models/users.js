const Sequelize = require('sequelize');
const db = require('./index');

const Users = db.define('users',
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    username: Sequelize.STRING(100),
  });

  const findUserId = async (userName) => {
    const select = await db.query('SELECT id from users where username = ?', 
       { replacements: [userName], type: db.QueryTypes.SELECT})  
     return select;  
 }

 function findOrCreateUser(name){
  Users
    .findOrCreate({where:{username:name}});
} 

module.exports = {Users, findUserId, findOrCreateUser};