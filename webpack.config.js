const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "production",
    plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin()],
    entry: './src/main/client/index.js',
    devServer: {
        static: {
            directory: path.join(__dirname, 'build/client'),
        },
        historyApiFallback: true,
        compress: true,
        port: 9000
    },
    output: {
        filename: "build.js",
        path: __dirname + "/build/client"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    }
}
