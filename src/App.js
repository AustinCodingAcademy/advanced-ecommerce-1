import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel.js';

function App(props) {

  {//var productDiv = props.products.map((p)=>{
//          <ProductDetail product={p} />
//        })
  }

  return (
    <div className="App">
      <Header />

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
                <div className="row">
                  <ProductDetail product={props.product}/>

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
