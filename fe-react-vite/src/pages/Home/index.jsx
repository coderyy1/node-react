import React from "react";
import { connect } from "dva";
import styles from "./style.module.less";

const Home = () => {
  return <div className={styles["home-page"]}>This is home page!</div>;
};

export default connect()(Home);
