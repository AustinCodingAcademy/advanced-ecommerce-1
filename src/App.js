import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Carousel from './components/Carousel';
import ProductGrid from './components/ProductGrid';
import './App.css';


function App(props) {

    return (<div className="App">
     
        <Header />
     
        <div className="md-flex">

            <Sidebar />

            <div className="md-col-9 overflow-hidden md-down-px3 md-pr3 pt2">

                <Carousel />

                <ProductGrid products={props.products}/>

            </div>
        </div>
       
        <Footer />
    
    </div>);
}

export default App;
