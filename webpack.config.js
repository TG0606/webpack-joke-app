const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js') // Bundle is the output js file name
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js', // [name] is bundle that is the output js file name and [contenthash] helps with caching
    clean: true, //Only keep ONE output js file
    assetModuleFilename: '[name][ext]' // Set name as its original name within assets(images)
  },
  devtool: 'source-map', // Source map provides a map for dist or production code to source code
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist') // That's which folder we serve
    },
    port: 3000, // local host
    open: true, // Open the browser automatically after npm run dev
    hot: true, // Hot reloading
    compress: true, // Enable gzip compression
    historyApiFallback: true // When using the HTML5 History API, this allows index.html to be served in place of any 404 reponses
  },
  module: {
    // Loaders
    rules: [
      {
        test: /\.scss$/, // Any files that end with scss will apply to the reloader
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/, // Any files that end with js will apply to the reloader
        exclude: /node_modules/, // Except this file
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Any files that end with one of these will apply to the reloader
        type: 'asset/resource' // As file-loader is used to emit your file in the output directory
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App', //Title for html
      filename: 'index.html', // Name for html
      template: 'src/template.html' //To specify its location
    })
  ]
};
