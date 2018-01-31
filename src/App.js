import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";



function App(props) {

    let prodDetails = props.state.products.map((product) => {
        return <ProductDetail addItemToCart={props.addItemToCart}  prod={product} />;
      });

    return (
      <div className="App">
     {/*<Header>*/}
    <Header checkout={props.checkout} numberOfItemsInCart = {props.state.cart.length} />
    {/*</Header>*/}
 
    <div className="container">

        <div className="row">

            <div className="col-md-3">
                <p className="lead">Shop Name</p>
                <div className="list-group">
                    <a href="#" className="list-group-item">Category 1</a>
                    <a href="#" className="list-group-item">Category 2</a>
                    <a href="#" className="list-group-item">Category 3</a>
                </div>
            </div>

            <div className="col-md-9">
                {/*<Carousel>*/}
               <Carousel />
                {/*</Carousel>*/}
                <div className="row">
                    {prodDetails}

                </div>

            </div>

        </div>

    </div>
   
    <div className="container">

        <hr/>

      {/*<Footer>*/}
        <Footer />
       {/*</Footer>*/}
    </div>
      </div>
    );
}

export default App;
