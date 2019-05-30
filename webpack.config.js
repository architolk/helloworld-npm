const path = require('path');

module.exports = {
  mode: 'development', //Set to 'production' for production
  entry: './src/index.js',
  devtool: 'inline-source-map', //Only for debugging
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
