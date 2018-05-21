import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductDetail from "./components/ProductDetail";
import Header from "./components/header";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Side from "./components/side";

class App extends Component {

  state = {
    numberOfItemsInCart: this.props.cart.length
  }

  addItem = (e) => {
    const currentItem = e.target.parentElement.parentElement.parentElement.id;
    const tempArr = this.props.products.find((item) => {
      return currentItem == item.id;
    });
    this.props.cart.push(tempArr);
    console.log(this.props.cart);
    this.setState({numberOfItemsInCart: this.props.cart.length});
   
  }

  renderProductDetail = () => {
    return this.props.products.map((prod, key) => {
      return <ProductDetail product={prod} key={key} addItem={this.addItem} />;
    });
  };
  
  render() {
    return (
      <div className="App">
        <Header count={this.state.numberOfItemsInCart} />

        <div className="container">

          <div className="row">

            <Side />

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

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
