const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const config = {

  // Tell webpack root file of our server application
  entry: './src/client/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
    // here we want this file to be publically available to anyone that requests it.
  }
}

module.exports = merge(baseConfig, config)
