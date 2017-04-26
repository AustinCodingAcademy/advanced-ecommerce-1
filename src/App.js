import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import SideNav from './components/SideNav'
import Carousel from './components/Carousel'
import ProductDetails from './components/ProductDetails'
import ShamelessPlug from './components/ShamelessPlug'
import Rating from './components/Rating'
import Footer from './components/Footer'
import state from './state.js'

function App(props) {
    const products = props;
    return (
      <div className="App">

    <NavBar />


    <div className="container">

        <div className="row">

            <SideNav />

            <div className="col-md-9">

                <Carousel />

                <div className="row">

                    <ProductDetails state={props.state}/>


                </div>

            </div>

        </div>

    </div>

    <div className="container">

        <hr/>

        <Footer />


    </div>
      </div>
    );
}

export default App;
