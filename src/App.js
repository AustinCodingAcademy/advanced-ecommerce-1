import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import State from './state';
import ProductDetail from './components/ProductDetail';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App(props) {
  let productDivs = props.products.map( (p, idx) => {
    return <ProductDetail key={idx} product={p} />
  });
  console.log(productDivs);
  console.log(props.products[0].name);
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
              <Carousel />


                <div className="row">
                  {productDivs}

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
