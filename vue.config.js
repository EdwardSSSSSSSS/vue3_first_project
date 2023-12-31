const path = require('path')

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : './',
    assetsDir: './assets',
    configureWebpack: {
        externals: { 'q': 'q', 'MyInsightsLibrary': 'MyInsightsLibrary' }
    },
    chainWebpack: config => {
        config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
        config.module
            .rule('svg-sprite-loader')
            .test(/\.svg$/)
            .include
            .add(resolve('src/assets/icons')) //处理svg目录
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    },
};