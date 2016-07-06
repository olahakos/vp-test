const config = {};

config.env = process.env.NODE_ENV || 'development';
config.isProd = config.env === 'production';
config.isTest = config.env === 'test';
config.isDev = config.env === 'development';

config.port = process.env.PORT || 3000;

config.apiKey = process.env.API_KEY || 'viapfmpb';
config.apiBaseUrl = process.env.API_BASE_URL || 'http://content.viaplay.se';

config.language = process.env.VP_LANG || 'SE';
config.lang = require(`./lang/${config.language}`);

module.exports = config;
