import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

ReactDOM.render(
  <App prod={state} />,
  document.getElementById("root")
);
