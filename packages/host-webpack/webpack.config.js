const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('@module-federation/enhanced');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/',
  },
  devServer: {
    port: 8080,
    hot: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'host_webpack',
      remotes: {
        'remote-a': 'remote_a@/remote-a/mf-manifest.json',
        'remote-b': 'remote_b@/remote-b/mf-manifest.json',
        'remote-c': 'remote_c@/remote-c/mf-manifest.json',
      },
      shareStrategy: 'loaded-first',
      shared: {
        'shared-lib': {
          eager: true,
          singleton: true,
        },
      },
    }),
  ],
};
