const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  const config = {
    entry: './src/index.js',
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Codejam',
        template: './src/index.html',
        favicon: './src/favicon.ico'
      }),
    ],
    devtool: isProduction ? false :  'inline-source-map',
    resolve: {
      extensions: ['.js'],
    },
    devServer: {
      static: './dist',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    optimization: {
      runtimeChunk: 'single',
    },
    mode: isProduction ? 'production' : 'development',
    watch: !isProduction,
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'babel-loader',
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.mp3$/i,
          type: 'asset/resource',
        },
        {
          test: /\.json$/i,
          loader: 'json5-loader',
          type: 'javascript/auto',
        },
      ],
    },
  }
  return config;
};