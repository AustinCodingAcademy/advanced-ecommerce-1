import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Carousel from './components/Carousel.js';
import ProductDetail from './components/ProductDetail.js';
import './App.css';


function App(props) {
    return (
        <div className="App">
     
            <Header />

            <div className="container">

                <div className="row">

                    <div className="col-md-3">
                        <p className="lead">Bamazon</p>
                        <div className="list-group">
                            <a href="#" className="list-group-item">Category 1</a>
                            <a href="#" className="list-group-item">Category 2</a>
                            <a href="#" className="list-group-item">Category 3</a>
                        </div>
                    </div>

                    <div className="col-md-9">

                        <Carousel />

                        <div className="row">

                            {props.products.map(element => <ProductDetail product={element} />)}

                        </div>

                    </div>

                </div>

            </div>

        <Footer />

        </div>
    );
}

export default App;
