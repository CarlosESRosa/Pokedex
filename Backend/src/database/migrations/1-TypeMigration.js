module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('types', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        type: {
          allowNull: false,
          type: Sequelize.STRING,
        }
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('types');
    },
  };