import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state.js";
// import products from "./state.js";

ReactDOM.render(
  <App products={state} />,
  document.getElementById("root")
);
