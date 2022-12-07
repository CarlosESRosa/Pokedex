const jwt = require('jsonwebtoken');
require('dotenv').config();

const senhasecreta = process.env.JWT_SECRET || 'jwt_secret';

const authToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const decoded = jwt.verify(token, senhasecreta);
    
    req.body.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

module.exports = authToken;
