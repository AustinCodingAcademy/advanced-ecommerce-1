import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state.js";
// import products from "./state.js";
// <App products={state} />,

ReactDOM.render(
  <App products={state.products} />,
  document.getElementById("root")
);
