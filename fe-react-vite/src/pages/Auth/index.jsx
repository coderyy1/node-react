import React, { useEffect, useState } from "react";
import { connect } from "dva";
import { Tabs, message, Button } from "antd";
import * as Api from "./api";
import styles from "./style.module.less";

const Auth = (props) => {
  const { dispatch } = props;

  const [regParams, setRegParams] = useState({});
  const [loginParams, setLoginParams] = useState({});

  useEffect(() => {}, []);

  const onRegInputChange = (field, val) => {
    if (typeof field === "string") {
      setRegParams((preState) => {
        const oldObj = preState;
        const newObj = { ...oldObj, [field]: val };
        return newObj;
      });
    }
  };

  const onLoginInputChange = (field, val) => {
    if (typeof field === "string") {
      setLoginParams((preState) => {
        const oldObj = preState;
        const newObj = { ...oldObj, [field]: val };
        return newObj;
      });
    }
  };

  const handleRegister = () => {
    if (!regParams.account || !regParams.password) {
      message.error({
        content: "请填写账号和密码",
        key: "no-account-pwd",
      });
      return;
    }
    if (regParams.sex && !(regParams.sex === "男" || regParams.sex === "女")) {
      message.error({
        content: "请填写正确的性别",
        key: "sex-err",
      });
      return;
    }
    if (regParams.age && !!!Number(regParams.age)) {
      message.error({
        content: "请填写正确的年龄",
        key: "age-err",
      });
      return;
    }
    const params = {
      ...regParams,
      sex: regParams.sex ? (regParams.sex === "男" ? "M" : "F") : "",
      age: regParams.age ? Number(regParams.age) : "",
    };
    console.log("params---", params);
    dispatch({
      type: "auth/register",
      payload: params,
    }).then((res) => {
      if (res) {
        message.success({
          content: "成功",
          key: "reg-success",
        });
        setRegParams({});
      }
    });
  };

  const handleLogin = () => {
    if (!loginParams.account || !loginParams.password) {
      message.error({
        content: "请填写账号和密码",
        key: "no-account-pwd",
      });
      return;
    }
    const params = {
      ...loginParams,
    };
    console.log("params---", params);
    dispatch({
      type: "auth/login",
      payload: params,
    }).then(({ code, msg }) => {
      if (code === 0) {
        message.success({
          content: msg,
          key: "login-success",
        });
        setLoginParams({});
      }
    });
  };

  const renderRegisterForm = () => {
    return (
      <div className={styles["register-box"]}>
        {/* <Input style={{ width: "256px" }} /> */}
        <div className={styles["input-wrapper"]}>
          <input
            type="text"
            value={regParams.account || ""}
            onChange={(e) => {
              onRegInputChange("account", e.target.value);
            }}
          />
          <span
            className={styles["input-label"]}
            style={regParams.account ? { display: "none" } : {}}
          >
            请输入账户
          </span>
        </div>
        <div className={styles["input-wrapper"]}>
          <input
            type="password"
            value={regParams.password || ""}
            onChange={(e) => {
              onRegInputChange("password", e.target.value);
            }}
          />
          <span
            className={styles["input-label"]}
            style={regParams.password ? { display: "none" } : {}}
          >
            请输入密码
          </span>
        </div>
        <div className={styles["input-wrapper"]}>
          <input
            type="text"
            value={regParams.name || ""}
            onChange={(e) => {
              onRegInputChange("name", e.target.value);
            }}
          />
          <span
            className={styles["input-label"]}
            style={regParams.name ? { display: "none" } : {}}
          >
            请输入姓名
          </span>
        </div>
        <div className={styles["input-wrapper"]}>
          <input
            type="text"
            value={regParams.sex || ""}
            onChange={(e) => {
              onRegInputChange("sex", e.target.value);
            }}
          />
          <span
            className={styles["input-label"]}
            style={regParams.sex ? { display: "none" } : {}}
          >
            请输入性别
          </span>
        </div>
        <div className={styles["input-wrapper"]}>
          <input
            type="text"
            value={regParams.age || ""}
            onChange={(e) => {
              onRegInputChange("age", e.target.value);
            }}
          />
          <span
            className={styles["input-label"]}
            style={regParams.age ? { display: "none" } : {}}
          >
            请输入年龄
          </span>
        </div>
        <Button
          type="primary"
          onClick={handleRegister}
          style={{ height: "48px", width: "312px" }}
        >
          register
        </Button>
      </div>
    );
  };

  const renderLoginForm = () => {
    return (
      <div className={styles["register-box"]}>
        {/* <Input style={{ width: "256px" }} /> */}
        <div className={styles["input-wrapper"]}>
          <input
            type="text"
            value={loginParams.account || ""}
            onChange={(e) => {
              onLoginInputChange("account", e.target.value);
            }}
          />
          <span
            className={styles["input-label"]}
            style={loginParams.account ? { display: "none" } : {}}
          >
            请输入账户
          </span>
        </div>
        <div className={styles["input-wrapper"]}>
          <input
            type="password"
            value={loginParams.password || ""}
            onChange={(e) => {
              onLoginInputChange("password", e.target.value);
            }}
          />
          <span
            className={styles["input-label"]}
            style={loginParams.password ? { display: "none" } : {}}
          >
            请输入密码
          </span>
        </div>
        <Button
          type="primary"
          onClick={handleLogin}
          style={{ height: "48px", width: "312px" }}
        >
          login
        </Button>
      </div>
    );
  };

  return (
    <div className={styles["auth-page"]}>
      <div className={styles["tabs-wrapper"]}>
        <Tabs defaultActiveKey="1" centered>
          <Tabs.TabPane tab="login" key="1">
            {renderLoginForm()}
          </Tabs.TabPane>
          <Tabs.TabPane tab="register" key="2">
            {renderRegisterForm()}
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default connect()(Auth);
