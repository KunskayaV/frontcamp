import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  entry: {
    main: [
      'babel-polyfill',
      path.resolve(__dirname, 'css/style.scss'),
      path.resolve(__dirname, 'css/loader.scss'),
      path.resolve(__dirname, 'css/error.scss'),
      path.resolve(__dirname, 'js/main.js'),
      path.resolve(__dirname, 'js/file.json')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/'
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')]
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
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: 'jsonLoader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'dist/index.html'),
      template: path.resolve(__dirname, 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  watch: true,
  devtool: 'source-map',
  devServer: {
    port: 9000,
    compress: true,
    writeToDisk: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};