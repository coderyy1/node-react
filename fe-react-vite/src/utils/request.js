import axios from "axios";
import { message } from "antd";

const baseUrl = "http://localhost:8000";

// 得到最终url的方法
const getUrl = (path) => {
  return `${baseUrl}${path}`;
};

export const get = (url, params, showLoading = true, showErr = true) => {
  return new Promise((resolve, reject) => {
    if (showLoading) {
      message.loading({
        content: "加载中...",
        key: "global-loading-msg",
        duration: 0,
      });
    }
    axios
      .get(getUrl(url), { params })
      .then(({ data: res = {} }) => {
        if (showLoading) {
          message.destroy("global-loading-msg");
        }
        const { code } = res;
        if (code === -1 && showErr) {
          message.error(res.msg, 2);
        }
        resolve(res);
      })
      .catch((err) => {
        if (showLoading) {
          message.destroy("global-loading-msg");
        }
        reject(err);
      });
  });
};

export const post = (url, params, showLoading = true, showErr = true) => {
  return new Promise((resolve, reject) => {
    if (showLoading) {
      message.loading({
        content: "加载中...",
        key: "global-loading-msg",
        duration: 0,
      });
    }
    axios
      .post(getUrl(url), params)
      .then(({ data: res = {} }) => {
        if (showLoading) {
          message.destroy("global-loading-msg");
        }
        const { code } = res;
        console.log(res);
        if (code === -1 && showErr) {
          message.error(res.msg, 2);
        }
        resolve(res);
      })
      .catch((err) => {
        if (showLoading) {
          message.destroy("global-loading-msg");
        }
        reject(err);
      });
  });
};
