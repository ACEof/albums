'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.renameColumn('albums', 'albumTitle', 'album_title');
    queryInterface.renameColumn('albums', 'userID', 'user_id');
  },

  down: (queryInterface, Sequelize) => {
  }
};
