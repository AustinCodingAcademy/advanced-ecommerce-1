import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./newModules/Header";
import Carousel from "./newModules/Carousel";
import ProductDetail from "./newModules/ProductDetail";
import Footer from "./newModules/Footer";

function App(props) {

  let p = props.prod;
  let prodDetails = p.products.map((product) => {
    return <ProductDetail prod={product} />;
  });

  return (
    <div className="App">

      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">

          <Header prod={props.prod} />

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
            <p className="lead">The Shop</p>
            <div className="list-group">
              <a href="#" className="list-group-item">Category 1</a>
              <a href="#" className="list-group-item">Category 2</a>
              <a href="#" className="list-group-item">Category 3</a>
            </div>
          </div>

          <div className="col-md-9">

            <Carousel prod={props.prod} />

            <div className="row">

              {prodDetails}

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
