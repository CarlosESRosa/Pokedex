const errorHandler = require('./errorHandler');

const validateUser = (body) => {
  const { username, password } = body;

  if (!username || username.length < 3) { 
    throw errorHandler(400, '"Username" length must be at least 5 characters long');
  }

  if (!password || password.length < 8) {
    throw errorHandler(400, '"password" length must be at least 8 characters long'); 
  }
};

module.exports = validateUser;