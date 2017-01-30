var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      test: /.*\.(gif|png|jpe?g|svg)$/i,
      loaders: ['awesome-typescript-loader', 
      'file?hash=sha512&digest=hex&name=[hash].[ext]',
      'image-webpack'],
      include: path.join(__dirname, 'src')
    }]
  }
};
