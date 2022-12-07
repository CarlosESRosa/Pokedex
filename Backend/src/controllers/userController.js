const userService = require('../services/userService');

const getUser = async (req, res, next) => {
    try {
        const users = await userService.getUser();

        res.status(201).json( users );
    } catch (error) {
        console.log(error.message);
        next(error);
    }
};

const postUser = async (req, res, next) => {
    try {
        const user = await userService.postUser(req.body);
        res.status(201).json( user );
    } catch (error) {
        console.log(error.message);
        next(error);
    }
};

module.exports = {
    getUser,
    postUser
};