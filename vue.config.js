/*
 * @Descripttion: spider
 * @version: 1.0.0
 * @Author: Lee Han
 * @Date: 2022-12-18 10:19:52
 * @LastEditors: Lee Han
 * @LastEditTime: 2022-12-18 18:15:46
 */
module.exports = {
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add("/packages/")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        //TODO
        return options;
      });
  },
};
