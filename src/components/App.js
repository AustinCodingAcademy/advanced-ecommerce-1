import React from "react";
import "./App.css";
import Nav from "./Nav";
import Body from "./Body";
import Footer from "./Footer";
import Carousel from "./Carousel";

function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
