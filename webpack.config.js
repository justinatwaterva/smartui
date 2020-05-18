const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const dotenv = require('dotenv');
const fs = require('fs');
// Import the terra-toolkit configuration.
const defaultWebpackConfig = require('terra-toolkit/config/webpack/webpack.config');


// Create the app-level configuration
const appWebpackConfig = (env) => {
  const currentPath = path.join(__dirname);
  const basePath = currentPath + '/.env';
  const fileEnv = dotenv.config({ path: basePath }).parsed;
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});


  return {
    entry: {
      index: path.resolve(path.join(__dirname, 'src', 'index')),
      fhir: path.resolve(path.join(__dirname, 'node_modules', 'fhirclient', 'build', 'fhir-client.min.js'))
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'My App',
          template: path.join(__dirname, 'public', 'index.html'),
          excludeChunks: [ 'node' ]
        }),
        new HtmlWebpackPlugin({
          inject: true,
          chunks: ['fhir'],
          template: path.join(__dirname, 'public', 'launch.html'),
          filename: 'launch.html',
          excludeChunks: [ 'node' ]
        }),
        new webpack.DefinePlugin(envKeys),
		new CopyPlugin({
		  patterns: [
			{ 
				from: 'public/launch.html', 
				to: '', 
				context: __dirname
			}
		  ],
		})
    ],
  }
};

const testServerConfig = (env) => {
  const currentPath = path.join(__dirname);
  const basePath = currentPath + '/.env';
  const fileEnv = dotenv.config({ path: basePath }).parsed;
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});


  return {
    target: 'node',
    name: 'server',
    entry: path.resolve(path.join(__dirname, 'src', 'server')),
    output: {
      path: path.resolve(__dirname + '/build'),
      filename: 'server.js'
    },
    externals: [nodeExternals()],
    mode: 'none',
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ],
    node: {
      __dirname: false
    }
  }
};


// combine the configurations using webpack-merge
const mergedConfig = (env, argv) => (
  merge(defaultWebpackConfig(env, argv), appWebpackConfig(env, argv))
);

module.exports = [mergedConfig, testServerConfig];