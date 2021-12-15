const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/devApi',
        {
            target: 'http://old.web-jshtml.cn/api/react',
            changeOrigin: true,
            pathRewrite: {
                '^/devApi': ""
            },

        }))
};