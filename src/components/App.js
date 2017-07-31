import React from "react";
import "./App.css";
import Navigation from "./Navigation";
import Main from "./Main";
import Footer from "./Footer";

function App(props) {



  return (
    <div className="App">

      <Navigation />

      <Main products={props.products} />

      <div className="container">

        <Footer />

      </div>
    </div>
  );
}

export default App;
