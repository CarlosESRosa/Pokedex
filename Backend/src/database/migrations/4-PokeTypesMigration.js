module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('pokeTypes', {
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
        type_id: {
            type: Sequelize.INTEGER,
            references: {
              model: 'types',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            primaryKey: true,
        },
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('pokeTypes');
    },
  };