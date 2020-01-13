const {
  resolve
} = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    main: './src/index.ts',
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: {
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.build.json',
        },
      },
    }, ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: resolve('dist'),
  },
};