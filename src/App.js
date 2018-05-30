import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductDetail from "./components/ProductDetail";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Carousel from "./components/Carousel"

class App extends Component {
    constructor(props) {
        super(props);
    };

    ProductArray() {
        return this.props.products.map((prod, key) => {
          return <ProductArray product={prod} key={key} addItem={this.addItem} />;
        });
      };

    render(){
        return (
        <div className="App">
        <Header /> 
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
                    <Carousel />
                    <div className="row">
                        <p>{productArray()}</p>
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
    };
};

export default App;
