const { Pokemons, Types } = require('../database/models');

const getPokemons = async () => {
    const pokemons = await Pokemons.findAll({
        include: {model: Types, as: 'types' }
    });

    return pokemons;
};

const getPokemonById = async (id) => {
    const pokemon = await Pokemons.findAll({
        where: { id },
        include: {model: Types, as: 'types' }
    });

    return pokemon;
};

module.exports = {
    getPokemons,
    getPokemonById
};