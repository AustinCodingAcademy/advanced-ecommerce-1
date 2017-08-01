import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductDetail from "./component/ProductDetail";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Carousel from "./component/Carousel";

function App(props) {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <p className="lead">Shop Name</p>
            <div className="list-group">
              <a href="#" className="list-group-item">
                Category 1
              </a>
              <a href="#" className="list-group-item">
                Category 2
              </a>
              <a href="#" className="list-group-item">
                Category 3
              </a>
            </div>
          </div>

          <div className="col-md-9">
            <Carousel />
            <ProductDetail product={props.products} />
          </div>
        </div>
      </div>

      <div className="container">
        <hr />

        <Footer />
      </div>
    </div>
  );
}

export default App;
