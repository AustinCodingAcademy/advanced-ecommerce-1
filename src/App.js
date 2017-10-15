import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Carousel from './components/Carousel.js';
import ProductDetail from './components/ProductDetail.js';
import Footer from './components/Footer.js';
import SideNav from './components/SideNav.js';

function App (props) {
  let header = <Header />;
  let sideNav = <SideNav />;
  let carousel = <Carousel />;
  let footer = <Footer />;
  let p = props.products;
  let productDivs = [];
  productDivs = props.products.map((p) => {
    return <ProductDetail product={p} />;
  });

  return (
    <div className="App">
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          {header}
        </div>
      </nav>
    <div className="container">
        <div className="row">
          {sideNav}
            <div className="col-md-9">

                  {carousel}

                <div className="row">
                  {productDivs}
                    <div className="col-sm-4 col-lg-4 col-md-4">
                      <h4><a href="#">Like this template?</a>
                      </h4>
                      <p>If you like this template, then check out <a target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this tutorial</a> on how to build a working review system for your online store!</p>
                      <a className="btn btn-primary" target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">View Tutorial</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

      <div className="container">
        <hr />
        {footer}
      </div>
    </div>
  );
}

export default App;
