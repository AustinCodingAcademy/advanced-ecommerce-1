import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductDetail from "./components/ProductDetail.js"
import state from "./state.js";
// import Carousel from "./components/Carousel.js";
// import Header from "./components/Header.js"
// import Footer from "./components/Footer.js"


function App(props) {
  var data = props.products.map((pro) => {
    return <ProductDetail key={pro.id} product={pro} />
  })
  return(
    <div><ProductDetail /></div>
  )
}

export default App;
