import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Body from "./component/Body.js";
import Header from "./component/Header.js";
import Footer from "./component/Footer.js";
import Carousel from "./component/Carousel.js";
// import Navigation from "./component/Navigation.js"
// import ProductDetail from './component/ProductDetail.js';
// import productsData from "./state.js"


function App() {
//  console.log(productsData[0]);
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
              <Carousel />
              <Body />
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>

  );
}

export default App;
