import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";


function App(props) {
  var items = props.items;
    return (
      <div className="App">
      <Navbar />
      <Body items={items} />
      <Footer />
      </div>
    );
}

export default App;
