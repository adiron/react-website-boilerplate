var CopyWebpackPlugin = require("copy-webpack-plugin");
var webpack = require("webpack");
var isProd = process.env.NODE_ENV = "production";

var devConfig = {
  devServer: {
    historyApiFallback: true
  },
  context: __dirname + "/src",
  entry: "./index.js",
  plugins: [new CopyWebpackPlugin([ { from: "*.html" } ])],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }
        ]
      }, {
        test: /\.json$/,
        loader: "json-loader"
      }, {
        test: /\.html$/,
        loader: "file-loader"
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: ['file-loader?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false']
      }
    ]
  }
}

if (isProd) {
  // If we're in production
  devConfig.output.path = __dirname + "/build";

  var WebpackStripLoader = require('strip-loader');
  var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    loader: WebpackStripLoader.loader('console.log')
  }
  devConfig.module.loaders.push(stripLoader);

  devConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
  devConfig.plugins.push(new webpack.optimize.AggressiveMergingPlugin());

}

module.exports = devConfig;
