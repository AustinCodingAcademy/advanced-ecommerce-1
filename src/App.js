import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Carousel from './Carousel'
import ProductDetail from './ProductDetail'

function App(props) {

    let productDivs = [];
    for (var i = 0; i < props.products.length; i++) {
      let p = props.products[i]
    }
    productDivs = props.products.map((p)=> {
      return <ProductDetail product={p}/> ;
    });


    return (
      <div className="App">

    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">

            <Header/>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>

        </div>

    </nav>


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

                <Carousel/>
                <div className="row">

                  {productDivs}


                </div>

            </div>

        </div>

    </div>

    <div className="container">

        <hr/>

        <Footer/>


    </div>
      </div>
    );
}

export default App;
