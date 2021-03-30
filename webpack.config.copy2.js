// https://juejin.cn/post/6844903834255360007
// 从0实现一个webpack loader
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    app: path.join(__dirname, './src/test.txt'),
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: ["./loaders/toUppercase.js", "./loaders/reverse.js"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].txt",
  },
};
