import React, { Component } from 'react';
import './App.css';
import ProductDetail from './Components/ProductDetail';
import Carousel from './Components/Carousel';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SideNav from './Components/SideNav';

function App(props) {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <SideNav />
          <div className="col-md-9">
            <Carousel />
            <div className="row">
              <ProductDetail product={props.product} />
              <div className="col-sm-4 col-lg-4 col-md-4">
                <h4><a href="#">Like this template?</a></h4>
                <p>If you like this template, then check out <a target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this tutorial</a> on how to build a working review system for your online store!</p>
                <a className="btn btn-primary" target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">View Tutorial</a>
              </div>
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
