import React, { Component } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductInfo from "./components/ProductInfo";
import State from "./state";
import SideBar from "./components/SideBar";

function App() {
  const ObjectOfUsers = State.products.map(function (item) {
    return (
      <ProductInfo key={item.key} name={item.name} description={item.description}
        reviews={item.reviews} ratings={item.ratings}
        img={item.imgUrl} price={item.price} />
    );
  });

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <SideBar />
          <div className="col-md-9">
            <Carousel />
            <div className="row">
              {ObjectOfUsers}
              <ProductDetails />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
