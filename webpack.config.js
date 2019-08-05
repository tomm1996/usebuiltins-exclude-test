const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        main: ['./src/main'],
    },
    output: {
        path: path.resolve(__dirname, './build/'),
        publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                /**
                 * Comment in exclude line and comment out include line to reproduce the bug
                 */
                // exclude: /node_modules\/(core-js)/,
                include: [
                    path.resolve(__dirname, 'node_modules/swiper'),
                    path.resolve(__dirname, 'node_modules/dom3'),
                ],
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: require.resolve('jquery'),
                use: [
                    {
                        loader: 'expose-loader',
                        options: 'jQuery'
                    },
                    {
                        loader: 'expose-loader',
                        options: '$'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
};
