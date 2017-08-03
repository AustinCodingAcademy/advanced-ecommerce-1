import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header.js';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App(props) {

    var productDivs = props.products.map( (product, i)=>{
      return <ProductDetail product={product} key={i}/> 
    });

    return (
      <div className="App">

    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
{/* HEADER This is the Header */}
            <Header />
{/* NAVBAR      */}
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
{/* CAROUSEL this is the carousel */}
                <Carousel />
        
                <div className="row">
                    {productDivs} 
                </div>

            </div>

        </div>

    </div>
   
    <div className="container">

        <hr/>

 {/* FOOTER       */}
        <Footer />

    </div>
      </div>
    );
}

export default App;
