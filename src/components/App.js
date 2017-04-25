import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Main from './Main';
import Footer from './Footer';

function App() {
    return (
      <div className="App">

    <Navigation />

    <Main />

    <div className="container">

        <hr/>

        <Footer />

    </div>
      </div>
    );
}

export default App;
