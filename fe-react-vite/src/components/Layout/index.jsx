import React from "react";
import { withRouter } from "dva/router";
import styles from "./style.module.less";

const Layout = (props) => {
  const { children, menu, header, location } = props;
  console.log(location);
  return (
    <div className={styles["layout-wrapper"]}>
      {location.pathname === "/auth" ? (
        <>{children}</>
      ) : (
        <>
          {header && <div className={styles["layout-header"]}>{header}</div>}
          <div
            className={styles["layout-main"]}
            style={header ? {} : { top: "0" }}
          >
            {menu && <div className={styles["layout-main-menu"]}>{menu}</div>}
            <div
              className={styles["layout-main-content"]}
              style={menu ? { left: "256px" } : {}}
            >
              {children}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default withRouter(Layout);
