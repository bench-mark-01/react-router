const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 
module.exports = {
  mode: 'development',
  devServer: {
    static: 'dist',
    open: true,
    historyApiFallback: true
  },
  entry: './src/js/index.js',  
  output: { 
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }]
        },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
              },
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/
  },
};