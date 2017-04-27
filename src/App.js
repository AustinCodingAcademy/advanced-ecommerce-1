import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Carousel from "./components/Carousel";
import ProductDetail from "./components/ProductDetails";
import Footer from "./components/Footer";
import ShamelessPlug from "./components/ShamelessPlug";


function App(props) {

  return (

    <div className="App">

      <Header />

      <div className="container">

        <div className="row">

          <Categories />
          <Carousel />&nbsp; {/* had to remove a random semicolon*/}
          <ProductDetail items={props.items} />
          <ShamelessPlug />

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default App;
