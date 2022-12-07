module.exports = {
    up: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkInsert('favorites',
        [{
            user_id: 1,
            pokemon_id: 134,
        },
        {
            user_id: 1,
            pokemon_id: 149,
        },
        {
            user_id: 1,
            pokemon_id: 6,
        },
        {
            user_id: 2,
            pokemon_id: 9,
        }
        ], { timestamps: false });
    },
  
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkDelete('favorites', null, {});
    },
  };
  