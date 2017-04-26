import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductDetail from './components/ProductDetail';
 import footer from './components/footer.js';
  import Header from './components/Header.js';
 import Carousel from './components/Carousel.js';


function App() {
    return (
      <div>
      <ProductDetail />
      <Header />
      <Carousel />
      <footer />
      </div>
);
}

export default App;
