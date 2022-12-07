module.exports = {
    up: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkInsert('users',
        [{
            id: 1,
            username: 'Porsa',
            password: 'Porsapass1',
        },
        {
            id: 2,
            username: 'Rosa',
            password: 'Rosapass1',
        },
        ], { timestamps: false });
    },
  
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkDelete('users', null, {});
    },
  };
  