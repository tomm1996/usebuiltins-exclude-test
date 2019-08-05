# Webpack & Babel useBuiltIns
This is a test trying to proof that useBuiltins does not work together with excluding core-js in babel-loader.


To reproduce, change the babel-loader rule in webpack.config.js to this:
````js
{
    test: /\.js$/,
    exclude: /node_modules\/(core-js)/,
    //include: [
    //    path.resolve(__dirname, 'node_modules/swiper'),
    //    path.resolve(__dirname, 'node_modules/dom3'),
    //],
    use: {
        loader: 'babel-loader'
    },
},
````
