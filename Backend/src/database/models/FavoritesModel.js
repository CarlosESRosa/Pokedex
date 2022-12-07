module.exports = (sequelize, DataTypes) => {
  const Favorites = sequelize.define('Favorites', {
    user_id: { type: DataTypes.INTEGER, foreignKey: true},
    pokemon_id: { type: DataTypes.INTEGER, foreignKey: true},
  },
  {
    timestamps: false,
    tableName: 'favorites',
  });


  Favorites.associate = (models) => {
    models.Users.belongsToMany(models.Pokemons, {
      as: 'pokemons',
      through: Favorites,
      foreignKey: 'user_id',
      otherKey: 'pokemon_id',
    });
    models.Pokemons.belongsToMany(models.Users, {
      as: 'users',
      through: Favorites,
      foreignKey: 'user_id',
      otherKey: 'pokemon_id',
    });
  };
    return Favorites;
};