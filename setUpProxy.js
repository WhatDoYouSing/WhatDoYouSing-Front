const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  console.log("실행 시도!");
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.musixmatch.com/ws/1.1/",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
  console.log("실행 완료!");
};
