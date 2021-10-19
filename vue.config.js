module.exports = {
  configureWebpack: {
  resolve: {
    mainFields: ['main', 'module'],
  }
  },
  devServer: {
    port: 5000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
      },
    },
  },
};

