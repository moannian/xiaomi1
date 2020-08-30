module.exports = {
    devServer: {
        host: "localhost", //主机
        port: "8080", //端口
        proxy: { //代理
            '/api': { //拦截
                target: '代理到哪里去',
                changeOrigin: true, //是否要将主机头的原点更改为url的地址
                pathRewrite: {}

            }

        }
    }
}