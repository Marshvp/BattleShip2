const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Change to 'production' when you're ready to deploy
    entry: './src/index.js', // Entry point of your app
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output file
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
        {
            test: /\.js$/, // Use babel-loader for .js files
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'], // Preset for compiling ES6 and beyond
            },
            },
        },
        {
            test: /\.css$/i, // Use style-loader and css-loader for .css files
            use: ['style-loader', 'css-loader'],
        }
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/template.html', // Use template.html as template
        }),
    ],
}