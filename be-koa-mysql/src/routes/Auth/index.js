const Router = require('koa-router');
const db = require('../../db/connectDB');

const router = new Router({
  prefix: '/auth'
});

//------------注册---------------------------
router.post('/register', async (ctx) => {
  const {
    account,
    password,
    name = '',
    sex = '',
    age = 0,
  }
  if (!account || !password) {
    ctx.body = {
      code: -1,
      msg: 'err'
    };
    return;
  }
  const user = await db.query(`SELECT * FROM user_info WHERE user_account = '${account}' AND user_password = '${password}'`);
  if (user.code === 200 && user.res && user.res.length > 0) {
    ctx.body = {
      code: -1,
      msg: '用户已存在'
    };
    return;
  }
  const addRes = await db.query(`INSERT INTO user_info (user_account, user_password, user_name, user_sex, user_age) VALUES ('${account}', '${password}', '${name}', '${sex}', '${age}',)`);
  if (addRes.code === 200) {
    ctx.body = {
      code: 0,
      msg: '添加成功'
    };
  }
});

module.exports = router;