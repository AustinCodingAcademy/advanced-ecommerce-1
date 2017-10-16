import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import products from './state.js';
const Header = require('../src/component/Header.jsx');
const Carousel = require('../src/component/Carousel.jsx');
import ProductDetails from './ProductDetails.jsx';
const Footer = require('../src/component/Footer.jsx');

function App() {
  
    const populateProduct = [];
    products.products.map((element) => {
        populateProduct.push(<ProductDetails item={element} />);
    });

    return (
<div className="App">
    <Header/>
    <Carousel/>
    {populateProduct}
    <Footer/>
</div>
    );
}

export default App;
