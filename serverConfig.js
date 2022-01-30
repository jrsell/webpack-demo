const dotenv = require('dotenv');
dotenv.config();


var config = {};
config.PORT = process.env.PORT || 3000;
config.DOMAIN = process.env.DOMAIN || 'http://localhost:3000';
config.NODE_ENV = process.env.NODE_ENV;

module.exports = config;