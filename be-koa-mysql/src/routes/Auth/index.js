const Router = require("koa-router");
const db = require("../../db/connectDB");

const router = new Router({
  prefix: "/auth",
});

router.get("/test", (ctx) => {
  ctx.body = {
    code: 0,
    msg: "success",
    data: "res",
  };
});

//-----------登录----------------------------
router.post("/login", async (ctx) => {
  const { account, password } = ctx.request.body;
  if (!account || !password) {
    ctx.body = {
      code: -1,
      msg: "err",
    };
    return;
  }
  const user = await db.query(
    `SELECT * FROM user_info WHERE user_account = '${account}' AND user_password = '${password}'`
  );
  if (user.code === 200 && user.res && user.res.length > 0) {
    ctx.body = {
      code: 0,
      msg: "登陆成功",
      data: {
        account: user.res[0].user_account,
        name: user.res[0].user_name,
        sex: user.res[0].user_sex,
        age: user.res[0].user_age,
      },
    };
  } else {
    ctx.body = {
      code: -1,
      msg: "账户名或密码错误",
    };
  }
});

//------------注册---------------------------
router.post("/register", async (ctx) => {
  const { account, password, name = "", sex = "", age = 0 } = ctx.request.body;
  if (!account || !password) {
    ctx.body = {
      code: -1,
      msg: "err",
    };
    return;
  }
  const user = await db.query(
    `SELECT * FROM user_info WHERE user_account = '${account}' AND user_password = '${password}'`
  );
  if (user.code === 200 && user.res && user.res.length > 0) {
    ctx.body = {
      code: -1,
      msg: "用户已存在",
    };
    return;
  }
  const addRes = await db.query(
    `INSERT INTO user_info (user_account, user_password, user_name, user_sex, user_age) VALUES ('${account}', '${password}', '${name}', '${sex}', '${Number(
      age
    )}')`
  );
  if (addRes.code === 200) {
    ctx.body = {
      code: 0,
      msg: "添加成功",
    };
  }
});

module.exports = router;
