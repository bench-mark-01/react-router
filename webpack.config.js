const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 
module.exports = {
  devServer: {
    static: "dist",
    open: true
  },
  entry: './src/js/index.js',  
  output: { 
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
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
      filename: "style.css",
    }),
  ],
  devtool: "source-map",
  watchOptions: {
    ignored: /node_modules/
  },
};