import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Carousel from "./Carousel";
import Footer from "./Footer";
import ProductDetail from "./ProductDetail";

function App(props) {

    let prodDetails = props.state.products.map((product)=> {
      console.log("Product (map input):",product);
      console.log("App props.state:",props.state);
      return <ProductDetail increase={props.increase} state={props.state} numberOfItemsInCart={props.numberOfItemsInCart} prod={product} />;
    });

    return (
      <div className="App">
    <Header numberOfItemsInCart = {props.state.numberOfItemsInCart} />



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

              <Carousel />

                <div className="row">

                    {prodDetails}

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
