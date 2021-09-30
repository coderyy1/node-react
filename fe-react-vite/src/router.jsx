import React from "react";
import { HashRouter, Route, Switch, Redirect } from "dva/router";
import App from "./App";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

function RouterConfig({ app }) {
  return (
    <HashRouter>
      <Layout header={<Header />}>
        <Switch>
          {/* <Route path="/" component={App} exact /> */}
          <Route path="/auth" component={Auth} exact />
          <Route path="/home" component={Home} exact />
          <Redirect to="/auth" />
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export default RouterConfig;
