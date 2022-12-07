const {fetchPokemons} = require('../../utils/fetchData')

module.exports = {
    up: async (queryInterface, _Sequelize) => {
      const arrayToSeed = await fetchPokemons();
      await queryInterface.bulkInsert('pokemons',
      arrayToSeed, { timestamps: false });
    },
  
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkDelete('pokemons', null, {});
    },
  };
  