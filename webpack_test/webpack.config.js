const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
        mode: 'production',
        // entry: './src/new.ts',
        entry: './src/index.js',
        plugins: [
                new MiniCssExtractPlugin(),
                // new HtmlWebpackPlugin({
                //         template: './src/index.pug',
                // filename: 'index.html'.
                // scriptLoading: "blocking"
                // })
        ],
        module: {
                rules: [{
                        test: /\.css$/,
                        use: [{
                                        loader: MiniCssExtractPlugin.loader,
                                        options: { esModule: true, },
                                },
                                'css-loader',
                        ]
                }, {
                        test: /\.pug$/,
                        use: 'pug-loader'
                }, {
                        test: /\.ts$/,
                        use: 'ts-loader'
                }, {
                        test: /\.js$/,
                        exclude: "/node_modules",
                        use: "eslint-loader"

                }]
        },
        optimization: {
                minimize: true,
                minimizer: [
                        '...',
                        new CssMinimizerPlugin(),
                ]
        }
};