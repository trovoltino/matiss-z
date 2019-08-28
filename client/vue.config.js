const path = require('path');

module.exports = {
  //consumer_key: '3eaqgxuSHBkGsTGFF9woF0PGk',
  //consumer_secret: 'sxFfov63WkEmtj6G5HOvrHp0BdDqky46SjbRrnfDk44zpnRPzV',
  //access_token_key: '787314863114715136-56SPjOk0Oz6mt6kfdbRHAb6l7UNwWj5',
  //access_token_secret: 'nskA7MWsY04HMFglYGZmTRV5AJ4knIkxy5rU8vRTvggoX',
  outputDir: path.resolve(__dirname, "./dist"),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5050'
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_mixins.scss";
        `
      }
    }
  }
};