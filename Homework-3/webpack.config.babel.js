import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  entry: {
    main: [
      'babel-polyfill',
      path.resolve(__dirname, 'css/style.scss'),
      path.resolve(__dirname, 'css/loader.scss'),
      path.resolve(__dirname, 'css/error.scss'),
      path.resolve(__dirname, 'css/news.scss'),
      path.resolve(__dirname, 'js/main.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/, 
        use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
      }
    ]
  },
  
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  watch: true,
  devtool: 'source-map',
  devServer: {
    port: 9000,
    compress: true,
    writeToDisk: true
  }
};