import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Carousel from "./Carousel.js";
import ProductInfo from "./ProductInfo.js";
import state from "./state.js";


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <Carousel />
          </div>
        </div>
        <div className="container">
          <div className="row">
            {state.products.map((item) => {
              return (
                <ProductInfo key={item.id} item={item} />
              );
            }
        )
      }
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}
