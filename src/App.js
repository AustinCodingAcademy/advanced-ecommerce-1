import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.js"
import Aside from "./components/Aside.js"
import Carousel from "./components/Carousel.js"
import ProductDetail from "./components/ProductDetail.js"
import Footer from "./components/Footer.js"

function App(props) {


    return (
      <div className="App">
        <Header />
        <div className="container">
            <div className="row">
              <Aside />
              <div className="col-md-9">
                <Carousel />
                <ProductDetail state={props.state.products}/>

              </div>
            </div>
        </div>
        <Footer />
      </div>
    );
}

export default App;
