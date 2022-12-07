const { Favorites, Users } = require('../database/models');

const getFavoritesByUser = async (username) => {
    const user = await Users.findOne({where: {username}})
    const favorites = await Favorites.findAll({where: {user_id: user.id}});

    return favorites;
};

const postFavorite = async (username, pokemon_id) => {
    const user = await Users.findOne({where: {username}})
    const favorite = await Favorites.create({
        user_id: user.id, pokemon_id: pokemon_id
    });

    return favorite;
};

const deleteFavorite = async (username, pokemon_id) => {
    const user = await Users.findOne({where: {username}})
    const favorite = await Favorites.findOne({ where: {user_id: user.id,  pokemon_id: pokemon_id } });

    if (!favorite) throw errorHandler(404, 'Post does not exist');
    const result = await Favorites.destroy({ where: {user_id: user.id,  pokemon_id: pokemon_id } });

    return result;
};

module.exports = {
    getFavoritesByUser,
    postFavorite,
    deleteFavorite
};