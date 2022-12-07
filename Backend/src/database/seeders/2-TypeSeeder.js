const {fetchTypes} = require('../../utils/fetchData')

module.exports = {
    up: async (queryInterface, _Sequelize) => {
      const arrayToSeed = await fetchTypes();
      await queryInterface.bulkInsert('types',
      arrayToSeed, { timestamps: false });
    },
  
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkDelete('types', null, {});
    },
  };
  