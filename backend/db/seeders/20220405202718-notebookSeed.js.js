'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notebooks', [
      {
        name: 'Notebook1',
        userId: 1
      },
      {
        name: 'Notebook1',
        userId: 2
      },
      {
        name: 'Notebook1',
        userId: 3
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notebooks', null, {});
  }
};
