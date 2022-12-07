const favoriteService = require('../services/favoriteService');

const getFavoritesByUser = async (req, res, next) => {
    try {
        const favorites = await favoriteService.getFavoritesByUser(req.body.user.data.username);

        res.status(200).json( favorites );
    } catch (error) {
        console.log(error.message);
        next(error);
    }
};

const postFavorite = async (req, res, next) => {
    try {
        const favorite = await favoriteService.postFavorite(req.body.user.data.username, req.body.pokemon_id);

        res.status(201).json( favorite );
    } catch (error) {
        console.log(error.message);
        next(error);
    }
};

const deleteFavorite = async (req, res, next) => {
    try {
        await favoriteService.deleteFavorite(req.body.user.data.username, req.body.pokemon_id);

        res.status(204).json();
    } catch (error) {
        console.log(error.message);
        next(error);
    }
};


module.exports = {
    getFavoritesByUser,
    postFavorite,
    deleteFavorite
};