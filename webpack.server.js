const path = require('path');

module.exports = {
  // Inform webpack we are building a bundle for Node rather than for browser
  // By default webpack assumes we are running code for the browser
  target: 'node',

  // Tell webpack root file of our server application
  entry: './src/index.js',

  // tells webpack where to pyt outputted file.
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // tell webpack to run babel on every file
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            ['env', { targets: { browsers: ['last 2 versions'] } }],
            'stage-0'
          ]
        }
      }
    ]
  }
}
