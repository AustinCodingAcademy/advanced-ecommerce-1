import React, { Component } from 'react';
import './App.css';
import Navbar from './modules/Navbar';
import LeftColumn from './modules/Left-column';
import Carousel from './modules/Carousel';
import FirstProduct from './modules/First-prod';
import SecondProduct from './modules/Second-prod';
import ThirdProduct from './modules/Third-prod';
import FourthProduct from './modules/Fourth-prod';
import FifthProduct from './modules/Fifth-prod';
import SixthProduct from './modules/Sixth-prod';
import Foot from './modules/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <div className="row">
                    <LeftColumn />
                    <div className="col-md-9">
                        <Carousel />
                        <div className="row">
                            <FirstProduct />
                            <SecondProduct />
                            <ThirdProduct />
                            <FourthProduct />
                            <FifthProduct />
                            <SixthProduct />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <Foot />
            </div>
        </div>
    );
}

export default App;
