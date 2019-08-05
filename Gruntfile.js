const webpackConfig = require('./webpack.config.js');

const webpackConfigDev = Object.assign({}, webpackConfig, {
    mode: 'development',
    devtool: 'source-map',
    watch: true
});

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        webpack: {
            build: webpackConfig,
            watch: webpackConfigDev
        },
    });

    grunt.registerTask('default', ['webpack:watch']);
    grunt.registerTask('build', ['webpack:build']);
    grunt.registerTask('watch', ['webpack:watch']);
};
