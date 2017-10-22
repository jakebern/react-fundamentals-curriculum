var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

//two goals when building for prod
//specify via NODE ENV what we are building for (how you tell React to build for prod)
//minify JS 

//to use firebase, need to install  npm install --save-dev firebase-tools

var config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};

//if building for prod, add these to config plugins
//setting process.env.NODE_ENV in the npm run build command
if (process.env.NODE_ENV === "production"){
  config.plugins.push(
    new webpack.DefinePlugin({
      //have to set production inside webpack code, as "npm run build"
      //does not do this
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  )
}


module.exports = config