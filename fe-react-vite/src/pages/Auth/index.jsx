import React from "react";
import { connect } from "dva";
import styles from "./style.module.less";

const Auth = (props) => {
  return (
    <div className={styles["auth-page"]}>
      <span>The Auth Page!123</span>
    </div>
  );
};

export default connect()(Auth);
