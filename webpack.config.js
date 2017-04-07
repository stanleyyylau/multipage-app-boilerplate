var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

// For samll projects, recommend just use one CSS file like app.css
// While medium to large projects, use [name].css to split out one css for each entry

var extractPlugin = new ExtractTextPlugin({
    filename: 'app.css',
    allChunks: true
});

module.exports = {
    entry: {
        index: './src/view/index/index.js',
        about: './src/view/about/about.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
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
        }, // image & font
        { test: /\.(woff|woff2|eot|ttf|otf)$/i, use: 'url-loader?limit=8192&name=[name].[ext]' },
        { test: /\.(jpe?g|png|gif|svg)$/i, use: 'url-loader?limit=81920&name=[name].[ext]'},
        { test: /\.(jpe?g|png|gif|svg)$/i, use: 'file-loader?hash=sha512&digest=hex&name=[name].[hash].[ext]'}
        ]},
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            test: "some test here",
            title: "title from template",
            template: 'html-withimg-loader!'+path.resolve(__dirname, 'src/view/index/index.html')
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
