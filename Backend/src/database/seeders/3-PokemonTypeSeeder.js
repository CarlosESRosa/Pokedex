const {fetchPokemonTypes} = require('../../utils/fetchData')

module.exports = {
    up: async (queryInterface, _Sequelize) => {
      const arrayToSeed = await fetchPokemonTypes();
      await queryInterface.bulkInsert('pokeTypes',
      arrayToSeed, { timestamps: false });
    },
  
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkDelete('pokeTypes', null, {});
    },
  };
  