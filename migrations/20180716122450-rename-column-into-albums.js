'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.renameColumn('albums', 'album_title', 'albumtitle');
  },

  down: (queryInterface, Sequelize) => {
  }
};
