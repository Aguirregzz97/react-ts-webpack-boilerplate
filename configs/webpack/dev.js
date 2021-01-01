const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./common')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const paths = {
  DIST: path.join(__dirname, '..', '..', 'dist'),
  SRC: path.join(__dirname, '..', '..', 'src')
}

module.exports = merge(common(), {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: paths.DIST,
    crossOriginLoading: 'anonymous',
    publicPath: 'http://localhost:8080/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  }
})