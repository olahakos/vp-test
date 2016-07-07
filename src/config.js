const config = {};

config.env = process.env.NODE_ENV || 'development';
config.isProd = config.env === 'production';
config.isTest = config.env === 'test';
config.isDev = config.env === 'development';

config.port = process.env.PORT || 8080;

config.apiBaseUrl = process.env.API_BASE_URL || 'http://content.viaplay.se';
config.taBaseUrl = process.env.TA_BASE_URL || 'http://api.traileraddict.com';
config.taApiKey = process.env.TA_API_KEY || 'viapfmpb';

config.language = process.env.VP_LANG || 'SE';
config.lang = require(`./lang/${config.language}`);

config.title = process.env.TITLE || 'VP-TEST';

module.exports = config;
