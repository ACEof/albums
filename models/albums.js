const Sequelize = require('sequelize');
const db = require('./index');

const Albums = db.define('albums', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  albumtitle: Sequelize.STRING,
  user_id: Sequelize.INTEGER
});

function createAlbum(title, id) {
  Albums
    .create({albumtitle: title, user_id: id});
}

const selectAlbumTitle = async (userID) => {
  const albumTitile = await db.query('SELECT albumtitle from albums where user_id = ?', 
    {replacements: [userID], type: db.QueryTypes.SELECT})
  return albumTitile;  
}

module.exports = {Albums, createAlbum, selectAlbumTitle};