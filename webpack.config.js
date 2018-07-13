const path = require('path')
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
// The path to the Cesium source code
// const cesiumSource = 'node_modules/cesium/Source';
// const cesiumWorkers = '../Build/Cesium/Workers';
// const CopywebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'electron-renderer',
  entry: {
		app: './src/index.js'
	},
  resolve: {
		alias: {
			// Cesium module name
			// cesium: path.resolve(__dirname, 'public/cesium')
		}
	},
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),

    // Needed to compile multiline strings in Cesium
    sourcePrefix: ''
    },
    amd: {
        // Enable webpack-friendly use of require in Cesium
        toUrlUndefined: true
    },
    node: {
        // Resolve node module use of fs
        fs: 'empty'
    },
    devServer: {
      contentBase: './public',
  },
  module: {
    unknownContextCritical : false,
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, 
      {
        test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
        use: [ 'url-loader' ]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    // Copy Cesium Assets, Widgets, and Workers to a static directory
    // new CopywebpackPlugin([ { from: path.join('public/cesium', 'Workers'), to: 'Workers' } ]),
    // new CopywebpackPlugin([ { from: path.join('public/cesium', 'Assets'), to: 'Assets' } ]),
    // new CopywebpackPlugin([ { from: path.join('public/cesium', 'Widgets'), to: 'Widgets' } ])
  ]
};