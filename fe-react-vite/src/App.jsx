import React, { useState } from "react";
import { connect } from "dva";
import "./App.css";

function App(props) {
  const { count, dispatch } = props;

  const handleClick = () => {
    dispatch({
      type: "common/save",
      payload: {
        count: count + 1,
      },
    });
  };

  return (
    <div className="App" onClick={handleClick}>
      {count}
    </div>
  );
}

export default connect(({ common }) => ({
  ...common,
}))(App);
