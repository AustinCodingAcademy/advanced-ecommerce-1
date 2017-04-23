import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import SideNav from './components/SideNav'
import Carousel from './components/Carousel'
import ProductDetail1 from './components/ProductDetail1'
import ProductDetail2 from './components/ProductDetail2'
import ProductDetail3 from './components/ProductDetail3'
import ProductDetail4 from './components/ProductDetail4'
import ProductDetail5 from './components/ProductDetail5'
import ShamelessPlug from './components/ShamelessPlug'
import Footer from './components/Footer'

function App() {
    return (
      <div className="App">

    <NavBar />


    <div className="container">

        <div className="row">

            <SideNav />

            <div className="col-md-9">

                <Carousel />

                <div className="row">

                    <ProductDetail1 />

                    <ProductDetail2 />

                    <ProductDetail3 />

                    <ProductDetail4 />

                    <ProductDetail5 />

                    <ShamelessPlug />

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
