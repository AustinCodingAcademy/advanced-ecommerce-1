import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import state from "./state";

const products = state.products;

ReactDOM.render(
  <App products={products} />,
  document.getElementById("root")
);
