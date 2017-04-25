import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Carousel from "./Carousel";
import ProductDetail from "./ProductDetail";
import Footer from "./Footer";
import state from "../state";


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
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
              <div className="row">
                <Carousel />
              </div>
              <div className="row">
                {
                  state.products.map((product) => {
                    return (
                      <ProductDetail
                        key={product.id}
                        product={product.name}
                        description={product.description}
                        reviews={product.reviews}
                        rating={product.rating}
                        imgUrl={product.imgUrl}
                        price={product.price} />
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
