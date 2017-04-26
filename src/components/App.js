import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";
import Footer from "./Footer";
import Carousel from "./Carousel";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <logo />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <p className="lead"> Shop Name </p>
            <div className="list-group">
              <a href="#" className="list-group-item"> Category 1 </a>
              <a href="#" className="list-group-item"> Category 2 </a>
              <a href="#" className="list-group-item"> Category 3 </a>
            </div>
          </div>
          <div className="col-md-9">
            <Carousel />
            <ProductDetail />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
