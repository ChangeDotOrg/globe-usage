const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
// The path to the Cesium source code
const cesiumSource = 'node_modules/cesium/Source'
const cesiumWorkers = '../Build/Cesium/Workers'
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = [{
  context: __dirname,
  target: 'electron-renderer',
  entry: {
		app: './src/index.js'
  },
  watchOptions: {
    ignored: ['dist', 'node_modules']
  },
  resolve: {
		alias: {
			// Cesium module name
			cesium: path.resolve(__dirname, cesiumSource)
		}
	},
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),

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
    contentBase: './dist',
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
        exclude: [/node_modules/, /dist/],
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
    // new CopyWebpackPlugin([{from: path.join(cesiumSource, cesiumWorkers), to: 'Workers'}]),
    // new CopyWebpackPlugin([{from: path.join(cesiumSource, 'Assets'), to: 'Assets'}]),
    // new CopyWebpackPlugin([{from: path.join(cesiumSource, 'Widgets'), to: 'Widgets'}]),
    new webpack.DefinePlugin({
      // Define relative base path in cesium for loading assets
      CESIUM_BASE_URL: JSON.stringify('./')
    }),
    // Split cesium into a seperate bundle
  //   new config.optimization.splitChunks({
  //     name: 'cesium',
  //     minChunks: function (module) {
  //         return module.context && module.context.indexOf('cesium') !== -1
  //     }
  // })
  ],
    // development server options
    devServer: {
        contentBase: path.join(__dirname, "dist")
    }
}]