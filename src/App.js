import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import ProductDetail from "./components/ProductDetail"
import Carousel from "./components/Carousel"

class App extends Component{
    state = {
        numberOfItemsInCart: 1,
        itemsInCart: [],
        cartOpen: false
    }
    
    handleAddToCart = (product) => {
        let itemsInCart = [...this.state.itemsInCart];
        itemsInCart.push({name: product.name, amount: product.price, description: product.description})
        this.setState({numberOfItemsInCart: this.state.numberOfItemsInCart + 1, itemsInCart: itemsInCart})
    }

    toggleCart = () => {
        if(this.state.cartOpen) {
            this.setState({cartOpen: false})
        } else {
            this.setState({cartOpen: true})
        }
    }

    productDetails = this.props.products.map((prod, i)=>{
        return <ProductDetail key={i} product={prod} clickEvent={this.handleAddToCart}/>
    })

    render() {
        return(
            <div className="App">
                <Header 
                numberOfItemsInCart={this.state.numberOfItemsInCart}
                 cartOpen={this.state.cartOpen} 
                 toggleCart={this.toggleCart}
                 itemsInCart={this.state.itemsInCart}/>
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
