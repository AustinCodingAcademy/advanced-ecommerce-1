import React, { Component } from "react";
import Header from "./components/Header.js";
import Carousel from "./components/Carousel.js";
import Footer from "./components/Footer.js";
import ProductDetail from "./components/ProductDetail.js";
import Sidebar from "./components/Sidebar.js";
import logo from "./logo.svg";
import "./App.css";
let fetch = require('node-fetch');

class App extends Component {

  state = {
    products: null,
    numberOfItemsInCart: 0,
    cart: []
  }

  componentDidMount() {
    fetch("http://localhost:3001/products").then(r=>r.json()).then(d=> {this.setState({products: d})}); 
  }  

  handleAddToCart=(product) => {
    const cartCopy = [...this.state.cart];
    cartCopy.push(product);
    this.setState({cart: cartCopy, numberOfItemsInCart: this.state.numberOfItemsInCart + 1 });
}

 
  renderProductDetail() {
    if(this.state.products !== null) {
      return (
            this.state.products.map((product, key) => {
              return (<ProductDetail product={product} handleAddToCart={this.handleAddToCart} />);
            })   
    );
  }
  }

  
  render() {
    return (
        
      <div className="App">
        {/* <Header>*/}
        <Header numberOfItemsInCart={this.state.numberOfItemsInCart}/>
        {/* </Header>*/}
 
        <div className="container">

          <div className="row">

       <Sidebar />

        <div className="col-md-9">
                
            <Carousel />
               
            <div className="row">
                   
                {this.renderProductDetail()}
                    
         
                {/*
                    <div className="col-sm-4 col-lg-4 col-md-4">
                        <h4><a href="#">Like this template?</a>
                        </h4>
                        <p>If you like this template, then check out <a target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this tutorial</a> on how to build a working review system for your online store!</p>
                        <a className="btn btn-primary" target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">View Tutorial</a>
                    </div>
*/}
              </div>

          </div>

      </div>

        </div>
   
        <div className="container">

          <hr />

          {/* <Footer>*/}
          <Footer />
          {/* </Footer>*/}
        </div>
      </div>
    );
  }
}

export default App;
