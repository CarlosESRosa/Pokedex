module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'users',
    });
    return Users;
  };