require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

const criaToken = (data) => {
    const token = jwt.sign(data, process.env.JWT_SECRET, jwtConfig);
    return token;   
};

module.exports = { criaToken };