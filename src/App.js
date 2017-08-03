import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderNav from './components/HeaderNav';
import SideBar from './components/SideBar';
import Carousel from './components/Carousel';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import StarRating from './components/StarRating';

function App(props) {
  console.log(props.products)
    return (
      <div className="App">

        <HeaderNav />

          <div className="container">

            <div className="row">
              <SideBar />

              <div className="col-md-9">
                <Carousel />

                <div className="row">
                  <ProductDetail products={props.products} />

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

        <Footer />


    </div>
      </div>
    );
}

export default App;
