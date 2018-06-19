import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import ProductDetail from "./components/ProductDetail"
import Carousel from "./components/Carousel"

class App extends Component{
    productDetails = this.props.products.map((prod, i)=>{
        return <ProductDetail key={i} product={prod}/>
    })

    render() {
        return(
            <div className="App">
                <Header/>
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
                        <Carousel/>
                        <div className="row">
                            {this.productDetails}
                        </div>
                    </div>
                </div>
                </div>
                <div className="container">

                <hr/>
                <Footer/>
                </div>
            </div>
        )
    };
}

export default App;
