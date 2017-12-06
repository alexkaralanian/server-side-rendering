const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpackNodeExternals = require('webpack-node-externals')

const config = {
  // Inform webpack we are building a bundle for Node rather than for browser
  // By default webpack assumes we are running code for the browser
  target: 'node',

  // Tell webpack root file of our server application
  entry: './src/index.js',

  // tells webpack where to pUt outputted file.
  // Here we use a new public directory
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // prevents node modules from bwing bundled with server side code, which doesnt get shipped to browser.
  externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config)
