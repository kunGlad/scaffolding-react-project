const path = require("path");

const webpack = require("webpack");

const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",

  entry: {
    index: "./src/index.js",
  },

  output: {
    filename: "bundle.js",

    path: path.resolve(__dirname, "build"),
  },

  module: {
    rules: [
      {
        test: /\.css$/,

        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.scss$/,

      //   use: ["style-loader", "css-loader", "sass-loader"],
      // },
      {
        test: /\.(png|svg|jpg|gif)$/,

        loader: "url-loader",

        options: {
          limit: 10000,

          name: "img/[name].[hash:7].[ext]",
        },
      },
      {
        test: /\.(js|jsx)$/,

        use: "babel-loader",

        exclude: /node_modules/,
      },
      // 在终端执行npm link loader-demo 后 再启动项目 npm run dev 就可以看到我们自己写的 去除console 的loader就完成了
      // {
      //   test: /\.(js|jsx)$/,
      //   use: { loader: "loader-demo" },
      //   exclude: /node_modules/,
      // },

      {
        test: /\.js$/,
        use: {
          loader: "loader-demo",
          options: {
            sign: "这是zk的测试loader",
          },
        },
        exclude: /node_modules/,
      },
    ],
  },

  devServer: {
    // contentBase: './build',

    port: 8081, // 端口号

    // inline: true,

    hot: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new HtmlPlugin({
      template: "public/index.html",
    }),
  ],
};
