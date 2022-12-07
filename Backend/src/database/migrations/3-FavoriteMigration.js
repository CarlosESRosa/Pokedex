module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('favorites', {
        user_id: {
            type: Sequelize.INTEGER,
            references: {
              model: 'users',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            primaryKey: true,
        },
        pokemon_id: {
            type: Sequelize.INTEGER,
            references: {
              model: 'pokemons',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            primaryKey: true,
        },
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('favorites');
    },
  };