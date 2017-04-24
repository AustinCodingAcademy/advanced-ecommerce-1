import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Header";
import state from "./state";


function App(props) {
  return (
    <div className="App">
      <Header />
      <ProductDetail props={state} />
      <Footer />
    </div>
  );
}

export default App;
