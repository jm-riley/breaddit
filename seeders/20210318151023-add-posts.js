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
   return queryInterface.bulkInsert('Posts', [
    {
      userId: 1,
      subbreadditId: 1,
      title: 'my best bread joke',
      body: 'Why was the loaf of bread upset? His plans kept going a rye.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      subbreadditId: 1,
      title: 'bread romance',
      body:
        'What does a loaf of bread say when breaking up with their significant other? You deserve butter.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 1,
      subbreadditId: 1,
      title: 'What did the toast say to the psychic?',
      body: 'You bread my mind!',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 1,
      subbreadditId: 1,
      title: 'Regular reddit is getting more attention than this site',
      body: `Don't be sourdough`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 1,
      subbreadditId: 1,
      title: 'How do you spot a radical baker?',
      body: `They're always going against the grain.`,
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
   return queryInterface.bulkDelete('Posts', null, {});
  }
};
