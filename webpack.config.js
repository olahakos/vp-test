const path = require('path');

const getConfig = require('hjs-webpack');

const envConfig = require('./src/config');

var config = getConfig({
  isDev: envConfig.isDev,
  port: envConfig.port,
  in: path.join(__dirname, 'src/app.js'),
  out: path.join(__dirname, 'dist'),
  clearBeforeBuild: true
});

// setup some aliases for webpack
config.resolve.root = [
  path.join(__dirname, 'src'),
  path.join(__dirname, 'node_modules')
];
config.resolve.alias = {
  'css': path.join(__dirname, 'src', 'styles'),
  'containers': path.join(__dirname, 'src', 'containers'),
  'components': path.join(__dirname, 'src', 'components'),
  'utils': path.join(__dirname, 'src', 'utils')
};

// Configure PostCSS
config.postcss = [].concat([
  require('precss')({}),
  require('autoprefixer')({}),
  require('cssnano')({})
]);

module.exports = config;
