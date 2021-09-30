const Koa = require("koa");
const koaBody = require("koa-body");
const cors = require("koa-cors");
const db = require("./db/connectDB");
const registerRouter = require("./routes");

const app = new Koa();

app.use(cors());
app.use(koaBody());

// app.use(async (ctx) => {
//   const result = await db.query(`SELECT * FROM user_info`);
//   if (result.code === 200) {
//     ctx.body = {
//       code: 0,
//       data: result,
//     };
//   }
// });

registerRouter(app).then(() => {
  app.listen(8000, () => {
    console.log("服务器启动成功,请访问localhost:8000");
  });
});
