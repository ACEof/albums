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

function deleteAlbum(title){
  Albums
    .destroy({where: {
      albumtitle: title
    }});
}

const selectAlbumTitle = async (userID) => {
  const albumTitile = await db.query('SELECT albumtitle from albums where user_id = ?', 
    {replacements: [userID], type: db.QueryTypes.SELECT})
  return albumTitile;  
}
function renameAlbum(oldTitle, newTitle){
  Albums.update({
    albumtitle: newTitle,
    }, {
    where: {albumtitle: oldTitle}
  })
}

module.exports = {Albums, createAlbum, selectAlbumTitle, deleteAlbum, renameAlbum};