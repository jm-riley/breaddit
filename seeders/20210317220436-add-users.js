'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        username: 'bob_the_baker',
        email: 'sourdoughbob@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'roll_with_it',
        email: 'gina@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'justLoafin',
        email: 'lancebakesbread@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
