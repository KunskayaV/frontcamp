import path from 'path';

export default {
  mode: 'development',
  entry: ['babel-polyfill', path.join(__dirname, 'js/main.js')],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader'
        }]
      }
    ]
  },
  watch: true,
  devtool: 'source-map'
};