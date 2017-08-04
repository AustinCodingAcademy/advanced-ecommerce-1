import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Header";
import state from "./state";
// test

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
