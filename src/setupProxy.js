const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.spotify.com/v1/",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
