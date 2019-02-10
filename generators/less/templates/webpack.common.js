const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './abvcss/style.less',
        
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
};