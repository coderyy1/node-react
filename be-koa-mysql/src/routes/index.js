const auth = require("./Auth");

module.exports = async (app) => {
  return new Promise(async (resolve, reject) => {
    await console.log("-----------------");
    await console.log("后端路由注册中...");
    await app.use(auth.routes());
    await console.log("后端路由注册成功");
    await console.log("-----------------");
    resolve();
  });
};
