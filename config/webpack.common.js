const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports =  {
  entry: './app/index.js',
  output: {
    path: __dirname + '/../dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
          loaders: {
              sass: 'vue-style-loader!css-loader!sass-loader?'+
                  '{"includePaths":["app/sass"]}'
          }
        }
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader',
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: __dirname + '/..',
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
    }),
    new WebpackBuildNotifierPlugin({
      title: "MKDesign Webpack Build",
      suppressSuccess: true
    }),
  ],
}
