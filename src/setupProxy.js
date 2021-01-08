const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // localhost:3000/api
  // localhost:8080/api
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
  // app.use(
  //   '/forms',
  //   createProxyMiddleware({
  //     target: 'http://localhost:8080',
  //     changeOrigin: true,
  //   })
  // );
};
