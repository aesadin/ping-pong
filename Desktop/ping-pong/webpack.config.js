const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: './src/main.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
  devtool: 'eval-source-map',  
  devServer: {                 
    contentBase: './dist'  
    },

  plugins: [
    new CleanWebpackPlugin(),   
    new UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Ping Pong',
      template: './src/index.html',
      inject: 'body',
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}