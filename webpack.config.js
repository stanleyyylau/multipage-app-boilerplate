var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');


var extractPlugin = new ExtractTextPlugin({
    filename: '[name].css'
});

module.exports = {
    entry: {
        index: './src/view/index/index.js',
        about: './src/view/about/about.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: 'dist'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }]
        }, {
            test: /\.scss$/,
            use: extractPlugin.extract({
                use: ['css-loader', 'sass-loader', 'postcss-loader']
            })
        }, {
            test: /\.pug$/,
            use: 'pug-loader'
        }]
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            test: "some test here",
            title: "title from template",
            template: './src/view/index/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            test: "te",
            title: "title from abot pagge",
            template: './src/view/about/about.pug'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer(),
                ]
            }
        })
    ]
};
