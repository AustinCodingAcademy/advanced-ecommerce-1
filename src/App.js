import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Carousel from "./components/Carousel";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";


function App(props) {

  return (

    <div className="App">

      <Header />

      <div className="container">

        <div className="row">

          <Categories />
          <Carousel />
          <ProductDetail items={props.items} />

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default App;
