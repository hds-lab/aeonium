var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    app: [
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://localhost:3000',
      './src/index'
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      include: path.join(__dirname, 'src'),
      use: [
        {
          loader: 'react-hot-loader'
        },
        {
          loader: 'awesome-typescript-loader'
        }
      ]
    },
    {
      test: /.*\.(gif|png|jpe?g|svg)$/i,
      exclude: path.join(__dirname, 'node_modules'),
      include: path.join(__dirname, 'src'),
      use: [
        {
          loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]'
        },
        {
          loader: 'image-webpack'
        }
      ]
    }]
  }
};
