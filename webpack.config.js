const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const serverConfig = require('./serverConfig');

module.exports = {

  // Externals included via CDN
  externals: {
    axios: 'axios',
  }, 
 
  // Module entry points
  entry: {
    index: './src/index.ts',
    component: './src/component2.ts',
  },

  // Output options
  output: {
    filename: '[name].[contenthash].js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,  // cleans up dist folder on build
   },

   // Handle typescript
   module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },   
   
  // Generates html files based on templates
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        title: 'Development',
        mainHeader: 'Julien',
        template: './src/index.ejs',
        chunks: ['index'],  // inserts the built bundle
    }),
    new HtmlWebpackPlugin({
      filename: 'index2.html',
      title: 'Hello',
      mainHeader: 'Sellgren',
      template: './src/index.ejs',
      chunks: ['component'],
    }),

    /* Inject Compile-time Configuration*/
    new webpack.DefinePlugin({
      __CONFIG__: JSON.stringify(serverConfig),
    })
  ],  

  // creates source map
  devtool: 'inline-source-map',
    
  // Serves files from dist directory on localhost:8080
  devServer: {
    static: './dist',
    hot: true,
    port: 8080,
    open: true,    
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
        secure: false
      }
    }    
  },  

 };