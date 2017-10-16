const paths             = {
  src: __dirname + "/src",
  dest: __dirname + "/../app/assets/javascripts",
};
const webpack           = require('webpack');

module.exports = {
  entry: paths.src + "/bootstrap",
  output: {
    path: paths.dest,
    filename: 'react-app.js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        query: {
          cacheDirectory: true
        }
      }
    ]
  },
  plugins:[
    new webpack.ProvidePlugin({
      React: "react",
      update: "react-addons-update",
      mui: "material-ui",
      t: "counterpart",
      API: paths.src + "/API",
      config: __dirname + "/config",
      BaseComponent: paths.src + "/BaseComponent",
    })
  ],
};
