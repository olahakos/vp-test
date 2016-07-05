const path = require('path');

const getConfig = require('hjs-webpack');

const config = require('./src/config');

var wpConfig = getConfig({
  isDev: config.isDev,
  port: config.port,
  in: path.join(__dirname, 'src/app.js'),
  out: path.join(__dirname, 'dist'),
  clearBeforeBuild: true
});

// Configure PostCSS
config.postcss = [].concat([
  require('precss')({}),
  require('autoprefixer')({}),
  require('cssnano')({})
]);

module.exports = wpConfig;
