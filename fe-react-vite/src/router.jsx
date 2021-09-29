import React from "react";
import { HashRouter, Route, Switch, Redirect } from "dva/router";
import App from "./App";
import Auth from "./pages/Auth";

function RouterConfig({ app }) {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/auth" component={Auth} exact />
      </Switch>
    </HashRouter>
  );
}

export default RouterConfig;
