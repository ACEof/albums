const Sequelize = require('sequelize');
const db = require('./index');

const Photos = db.define('photos',
  {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    photoname: Sequelize.STRING(100),
    albumid: Sequelize.INTEGER,
  });

function createPhoto (albumID, name) {
  Photos
    .create({albumid: albumID, photoname: name});
}

const selectPhotoName = async (albumID) => {
  const photoName = await db.query('SELECT photoname from photos where albumid = ?',
    {replacements: [albumID], type: db.QueryTypes.SELECT});
  return photoName;
};

module.exports = {Photos, createPhoto, selectPhotoName};