module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('pokemons', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        image: {
          allowNull: false,
          type: Sequelize.STRING,
        }
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('pokemons');
    },
  };