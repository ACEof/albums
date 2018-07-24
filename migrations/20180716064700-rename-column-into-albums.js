'use strict';

module.exports = HEAD > {
  up: (queryInterface, Sequelize) => {
    queryInterface.renameColumn('albums', 'albumTitle', 'album_title');
    queryInterface.renameColumn('albums', 'userID', 'user_id');
  },

  down: (queryInterface, Sequelize) => {

  } < < < < < <
=== ====
>>>>>>> fa338da9bb8cf9cc43f1bdf46f181eb6397f39e0
  }
};
