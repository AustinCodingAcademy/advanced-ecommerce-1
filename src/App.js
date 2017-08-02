import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import ProductDetail from "./components/product_detail";
import Header from "./components/header";
import Footer from "./components/footer";
import Carousel from "./components/carousel";

function App(props) {
  const products = props.products;  //contain arrays of products
  return (
    <div className="App">
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <Header />
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <p className="lead">Shop Name</p>
            <div className="list-group">
              <a href="#" className="list-group-item">Category 1</a>
              <a href="#" className="list-group-item">Category 2</a>
              <a href="#" className="list-group-item">Category 3</a>
            </div>
          </div>
          <div className="col-md-9">
            <Carousel />
            <div className="row">
              {products.map((product) => {
                return (
                  <ProductDetail
                    key={product.id}
                    product={product}
                     />
                );
              })}
            </div>
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
