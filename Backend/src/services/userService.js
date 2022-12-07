const { Users  } = require('../database/models');
const validateUser = require('../utils/validateUser');
const errorHandler = require('../utils/errorHandler');


const getUser = async () => {
    const users = await Users.findAll();

    return users;
};


const postUser = async (body) => {
    validateUser(body);
    const existentUser = await Users.findOne({ where: { username: body.username } });
    if (existentUser) throw errorHandler(409, 'User already registered');
    
    const user = await Users.create(body);
  
    return user;
  };

module.exports = {
    getUser,
    postUser
};