import React from "react";
import ReactDOM from "react-dom";
import dva from "dva";
import createHashHistory from "history/createHashHistory";
import registerModels from "./models";
import RouterConfig from "./router";
import "antd/dist/antd.css";

const history = createHashHistory();

const app = dva({
  history,
});

registerModels(app);

app.router(RouterConfig);

app.start("#root");
