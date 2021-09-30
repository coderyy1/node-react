const mysql = require("mysql");
const config = require("../config/defaultConfig");

let pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  multipleStatements: true,
});

// 提供异步查询方法
exports.query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        console.log("连接数据库失败，", err);
        resolve({
          code: 500,
        });
      } else {
        // console.log("连接数据库成功");
        connection.query(sql, values, (err, res) => {
          if (err) {
            reject(err);
            resolve({
              code: 400,
            });
          } else {
            connection.release();
            resolve({
              code: 200,
              res,
            });
          }
        });
      }
    });
  });
};
