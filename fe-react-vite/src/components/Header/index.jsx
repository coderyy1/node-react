import React from "react";
import { connect } from "dva";
import styles from "./style.module.less";

const Header = () => {
  return <div className={styles["header-comp"]}>13123</div>;
};

export default connect()(Header);
