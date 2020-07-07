const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlConfig = {
  title: "WebPack-5",
  filename: "index.html",
  inject: "body",
  scriptLoading: "defer",
  favicon: "favicon.ico",
  meta: { viewport: "width=device-width,initial-scale=1" },
  template: "./src/template.html"
};

module.exports = (env, argv) => {
  return {
    entry: {
      homePage: "./src/index.js"
    },
    // mode: env.production ? "production" : "development",
    mode: "development",
    devtool: 'source-map',
    devServer: {
      contentBase: './dist',
      port: 3000
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: "babel-loader",
          },
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]'
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin(htmlConfig)
    ]
  };
};
