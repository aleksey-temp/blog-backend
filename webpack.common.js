const path = require('path');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

exports.commonConfig = {
  entry: {
    app: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.ts'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
      eslint: {
        enabled: true,
        files: './src/**/*.ts',
      },
    }),
  ],
  optimization: {
    noEmitOnErrors: true,
  },
  target: 'node',
};
