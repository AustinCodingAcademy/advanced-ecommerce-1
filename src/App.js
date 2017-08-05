import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Header";
import state from "./state";
// test
//test 2
// test 3
// test 4

function App() {
  return (
    <div className="App">
      <Header />
      <ProductDetail props={state} />
      <Footer />
    </div>
  );
}

export default App;
