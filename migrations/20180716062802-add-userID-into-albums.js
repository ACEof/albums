'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'albums',
      'userID',
      Sequelize.INTEGER
    );
  },

  down: (queryInterface, Sequelize) => {
  }
};
