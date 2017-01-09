var path = require('path');
var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');


module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
        ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
         new webpack.ProvidePlugin({
             '$': 'jquery',
             'jQuery': 'jquery'
         })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: __dirname,
        alias: {
            ApplicationStyles: 'app/styles/app.scss'
        }
    },
    modulesDirectories: [
        'node_modules',
        './app/components'
    ],
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss'),
        ]
    },
    devtool: 'inline-source-map'
};
