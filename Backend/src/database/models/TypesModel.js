module.exports = (sequelize, DataTypes) => {
    const Types = sequelize.define('Types', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      type: DataTypes.STRING,
     },
    {
      timestamps: false,
      tableName: 'types',
    });
    return Types;
  };