// Provide config for React project..
// Webpack runs on NODEJS!
// Babel transpiles JS 6/7 into more traditional code
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    devtool: 'cheap-module-eval-source-map', // for debugging original code
    module: {
        rules: [
            {
                // for these files, use this transformer
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};