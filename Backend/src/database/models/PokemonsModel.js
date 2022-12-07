module.exports = (sequelize, DataTypes) => {
    const Pokemons = sequelize.define('Pokemons', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'pokemons',
    });

    return Pokemons;
  };