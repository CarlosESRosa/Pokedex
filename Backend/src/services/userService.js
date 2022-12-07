const { Users  } = require('../database/models');
const validateUser = require('../utils/validateUser');
const errorHandler = require('../utils/errorHandler');
const generateJWT = require('../utils/generateJWT');
const bcrypt = require('bcrypt');

const getUser = async () => {
    const users = await Users.findAll();

    return users;
};

const postUser = async (body) => {
    const { username, password } = body;
    
    if (!username) throw errorHandler(404, 'All fields must be filled');
	if (!password) throw errorHandler(404, 'All fields must be filled');

    const existentUser = await Users.findOne({ where: { username: body.username } });

    if(existentUser)  throw errorHandler(401, 'User already exists');
    if (username.length < 3) { 
        throw errorHandler(400, 'Username need to have at least 3 caracteres and password 8 caracteres, a number and a uppercase character');
    }
    if (password.length < 8) {
        throw errorHandler(400, 'Username need to have at least 3 caracteres and password 8 caracteres, a number and a uppercase character'); 
    }
    const haveUppercase = /(?=.*[A-Z])/.test(password);
    const haveNumber = /[0-9]/.test(password);
    if(password.length < 8 || haveUppercase === false || !haveNumber) {
        throw errorHandler(400, 'Username need to have at least 3 caracteres and password 8 caracteres, a number and a uppercase character'); 
    }

    const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync(body.password, salt);
    const user = await Users.create({
        username: body.username, password: hash
    });

    return user;
};

const login = async (body) => {
    const { username, password } = body;
    const userFromDb = await Users.findOne({ where: { username: body.username } });

    if (!username) throw errorHandler(404, 'All fields must be filled');
	if (!password) throw errorHandler(404, 'All fields must be filled');
    if (!userFromDb) throw errorHandler(404, 'User not found');
    
    const compareHash = bcrypt.compareSync(password, userFromDb.password);
    if (!compareHash) throw errorHandler(400, 'Incorrect Username or Password');

    const token = generateJWT(
        { username: userFromDb.username},
    );

    return token;
};

module.exports = {
    getUser,
    postUser,
    login
};