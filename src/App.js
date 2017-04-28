import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductDetail from "./components/ProductDetail";
import footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Carousel from "./components/Carousel.js";
import state from "./state";


function App() {
  const products = state.products;
  console.log(products);
  return (
    <div>
      {products.map(product => {
        return (
          <ProductDetail
            key={product.id}
            name = {product.name}
            description = {product.description}
            reviews = {product.reviews}
            ratings = {product.ratings}
            imgUrl = {product.imgUrl}
            price = {product.price}
            />
        );

      })}
      <ProductDetail />
      <Header />
      <Carousel />
      <footer />
    </div>
  );
}

export default App;
