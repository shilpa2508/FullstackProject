const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './index.js',  // ✅ Fixed Entry Point (No './src')
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,  // ✅ Cleans old files in 'dist' before each build
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,   // ✅ Process JavaScript Files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.scss$/,   // ✅ Process SCSS Files
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,   // ✅ Process CSS Files
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',  // ✅ Correct Path
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,  // ✅ Runs on http://localhost:8080/
        open: true,   // ✅ Auto-opens browser when running 'npm start'
    },
};
