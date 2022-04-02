'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Notes', [{ 
        title: 'test',
        content: 'testsetstset',
        noteBookId: 1,
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        title: 'test2',
        content: 'testsetstset',
        noteBookId: 1,
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        title: 'test3',
        content: 'testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset testsetstset',
        noteBookId: 1,
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Notes', null, {});

  }
};
