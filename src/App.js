import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import './App.css';

import Header from "./components/Header"
import Carousel from "./components/Carousel"
import ProductDetail from "./components/ProductDetail"
import Footer from "./components/Footer"
import SideBar from "./components/SideBar"
import Checkout from "./components/Checkout"

export default class App extends Component{
    
    state={
        numberOfItemsInCart: 0,
        cart: [],
    }
     handleAddtoCart = (product)=>{
        let cartArr = [...this.state.cart]
        cartArr.push({item: product.name, price: product.price, description: product.description})
        this.setState({numberOfItemsInCart: this.state.numberOfItemsInCart + 1,
        cart: cartArr }) 
    }

    render(){
        const products = this.props.products.map((item, i)=>{
            return <ProductDetail
                        key={i} 
                        product={item} 
                        clickEvent={this.handleAddtoCart}
                    />
        })

        return (
          <div className="App">
            <Header 
                itemsInCart={this.state.numberOfItemsInCart}
                toggleCart={()=>!this.state.cartVisible ? this.setState({cartVisible:true}) : this.setState({cartVisible:false})}
                cartItems={this.state.cart}
                isVisible={this.state.cartVisible}
            />

     
            <div className="container">
                <div className="row">
                <SideBar />
                    <div className="col-md-9">
                        <Carousel />
                        <div className="row">    
                        {products}
                        </div>
                    </div>
                </div>
            </div>
                <div className="container">
                <hr/>
                    <Footer />
                    <Checkout order={this.state.cart}/>
                </div>
        </div>
        );
    
    }
}





