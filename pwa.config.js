exports.webpack = function(config, env) {
  if (!env.production) {
    config.devServer.proxy = {
      "/pkg": {
        target: "https://pkg.nyc",
        changeOrigin: true
      },
      "/login": {
        target: "https://pkg.nyc",
        changeOrigin: true
      }
    };
  }
};
