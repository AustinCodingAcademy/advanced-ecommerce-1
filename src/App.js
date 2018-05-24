import React from "react";
// import logo from "./logo.svg";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import MenuLeft from "./components/MenuLeft";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <MenuLeft />
          </div>
          <div className="col-md-9">
            <Carousel />
            <div className="row">
              <ProductDetail />            
              {/*
                    <div className="col-sm-4 col-lg-4 col-md-4">
                        <h4><a href="#">Like this template?</a>
                        </h4>
                        <p>If you like this template, then check out <a target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this tutorial</a> on how to build a working review system for your online store!</p>
                        <a className="btn btn-primary" target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">View Tutorial</a>
                    </div>
               */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default App;
