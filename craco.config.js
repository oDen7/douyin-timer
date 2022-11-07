const CracoLessPlugin = require('craco-less');
module.exports = {
    devServer: {
        open: false,
    },
    plugins: [{
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
                lessOptions: {
                    modifyVars: {},
                    javascriptEnabled: true,
                },
            },
        },
    }, ],
}