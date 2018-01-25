import React, { Component } from 'react';
import './App.css';
import Navbar from './modules/Navbar';
import LeftColumn from './modules/Left-column';
import Carousel from './modules/Carousel';
import ProductBox from './modules/ProductBox';
import Foot from './modules/Footer';

const App = (props) => {
  const test =
    props.products.products.map(
      (cur, ind) => {
        return <ProductBox product={props.products.products[ind]} />
      }
    )

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <LeftColumn />
          <div className="col-md-9">
            <Carousel />
            <div className="row">
              {test}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Foot />
      </div>
    </div>
  );
}

export default App;
