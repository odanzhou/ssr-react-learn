const path = require('path')

module.exports = {
  mode: 'none',
  entry: '/client/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      }
    }]
  }
}