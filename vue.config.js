module.exports = {
  transpileDependencies: ["vuetify"],
  lintOnSave: false,
  devServer: {
    proxy: "https://localhost:44375/api",
  },


};
