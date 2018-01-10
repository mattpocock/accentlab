var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './wp-content/themes/twentytwelve/js/export/index.js',
     output: {
         path: path.resolve('./wp-content/themes/twentytwelve/build'),
         filename: 'main.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };