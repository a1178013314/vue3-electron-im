const { resolve } = require('path')

module.exports = {
  entry: {
    main: resolve(__dirname, "../src/main/main.js"),
  },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "../dist/main/"),
  },
  // node: {
  //   fs: 'empty'
  // },
}