const auth = require("./Auth");

module.exports = (app) => {
  app.use(auth.routes());
};
