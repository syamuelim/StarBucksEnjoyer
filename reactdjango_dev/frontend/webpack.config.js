const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
      test: /\.(png|jpe?g|gif|svg)$/,
      use: ["file-loader"],
      }
    ],

  },
  optimization: {
    minimize: true,
  },

//   module: {
//     rules: [
//       {
//         test: /\.(png|jpe?g|gif|svg)$/,
//         use: [
//                {
//                  loader: "file-loader",
//                  options: {
//                    outputPath: 'images'
//                  }
//                }
//              ]
//       }
//     ]
//   },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("development"),
      },
    }),
  ],
}; 