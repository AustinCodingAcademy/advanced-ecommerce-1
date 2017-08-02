import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import SideNav from './components/SideNav';

function App(props) {
    const productDiv = props.products.map((product) => {
      return (
        <ProductDetail
          key={product.id}
          product={product} />
      )
    });

    return (
      <div>
        <div className="App">
        <Header />
          <div className="container">
            <div className="row">
            <SideNav />
              <div className="col-md-9">
                  <Carousel />
                  {productDiv}
                  <div className="row">
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
          <hr/>
            <footer>
                <div className="row">
                    <div className="col-lg-12">
                        <p>Copyright &copy; Your Website 2014</p>
                    </div>
                </div>
            </footer>
            </div>
          </div>
        </div>
      );
}

export default App;
