import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Body from './Body';
import Footer from './Footer';

function App() {
    return (
      <div className="App">
        <Nav />
        <Body />
        <Footer />
      </div>
    );
}

export default App;
