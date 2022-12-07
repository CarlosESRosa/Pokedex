module.exports = {
    up: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkInsert('users',
        [{
            username: 'Porsa',
            password: '$2b$10$DfgPVSJGRknDl7WNYcb0U.I0yfyv0g3i1HrLgjtxBArFbYahMF/Su', // Porsapass1
        },
        {
            username: 'Rosa',
            password: '$2b$10$5Qd1/hSjzmfAtCOfFk.JVOm0B8owvYxKJbtvuiXOQKUKyazUmyTCi', // Rosapass1
        },
        ], { timestamps: false });
    },
  
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkDelete('users', null, {});
    },
  };
  