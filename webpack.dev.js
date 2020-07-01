const merge = require('webpack-merge');

const { commonConfig } = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
});
