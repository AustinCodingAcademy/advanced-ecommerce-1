import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import state from './state'
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App(props) {
    const productDivs = props.products.map((p, i) =>{
      return <ProductDetail key={i} product={p} />;
    });
    console.log("props coming in", props);
    console.log("productDivs",productDivs);


    return (
      <div className="App">

    <div className="container">
      <Header />

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
              <Carousel />



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

        <hr/>

        <Footer />

    </div>
      </div>
    );
}

export default App;
