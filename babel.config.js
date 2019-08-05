module.exports = function (api) {
    api.cache(true);

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    corejs: {
                        version: 3,
                    },
                    useBuiltIns: 'usage',
                }
            ]
        ],
    };
};
