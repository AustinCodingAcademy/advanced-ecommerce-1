import React from "react";
// import logo from "./logo.svg";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import MenuLeft from "./components/MenuLeft";
// import Template from "./components/Template";
import PropTypes from "prop-types";
import "./App.css";

function App(props) {
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
              <ProductDetail product={props.products} />            
              {/* <Template /> */}
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

App.propTypes = {
  products: PropTypes.array.isRequired
};

export default App;
