const pokemonService = require('../services/pokemonService');

const getPokemons = async (req, res, next) => {
    try {
        const pokemons = await pokemonService.getPokemons();

        res.status(200).json( pokemons );
    } catch (error) {
        console.log(error.message);
        next(error);
    }
};

const getPokemonById = async (req, res, next) => {
    try {
        const pokemon = await pokemonService.getPokemonById(req.params.id);

        res.status(200).json( pokemon );
    } catch (error) {
        console.log(error.message);
        next(error);
    }
};

module.exports = {
    getPokemons,
    getPokemonById
};