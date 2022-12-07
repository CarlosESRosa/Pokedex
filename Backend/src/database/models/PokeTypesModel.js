module.exports = (sequelize, DataTypes) => {
  const PokeTypes = sequelize.define('PokeTypes', {
    pokemon_id: { type: DataTypes.INTEGER, foreignKey: true},
    type_id: { type: DataTypes.INTEGER, foreignKey: true},
  },
  {
    timestamps: false,
    tableName: 'pokeTypes',
  });


  PokeTypes.associate = (models) => {
    models.Pokemons.belongsToMany(models.Types, {
    as: 'types',
    through: PokeTypes,
    foreignKey: 'pokemon_id',
    otherKey: 'type_id',
    });
    models.Types.belongsToMany(models.Pokemons, {
    as: 'pokemons',
    through: PokeTypes,
    foreignKey: 'pokemon_id',
    otherKey: 'type_id',
    });
  };

    return PokeTypes;
  };