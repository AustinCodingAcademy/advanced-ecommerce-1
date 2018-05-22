import React, { Component } from "react";
import "./App.css";
import ProductDetail from "./components/ProductDetail";
import Header from "./components/header";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Side from "./components/side"; 

class App extends Component {


  state = {
    cart: this.props.cart,
    numberOfItemsInCart: this.props.cart.length
  }
  

  addItem = (e) => {
    const currentItem = Number(e.target.parentElement.parentElement.parentElement.id);
    const tempArr = this.props.products.find((item) => {
      return currentItem === item.id;
    });
    this.state.cart.push(tempArr);
    this.setState({numberOfItemsInCart: this.state.cart.length});
  }

  clearCartOnSubmit = () => {
    this.setState({cart: []});
    // console.log(this.state.cart);
    setTimeout(() => {
      this.setState({numberOfItemsInCart: this.state.cart.length});
    }, 500);
  }

  renderProductDetail = () => {
    return this.props.products.map((prod, key) => {
      return <ProductDetail product={prod} key={key} addItem={this.addItem} />;
    });
  };
  
  render() {
    return (
      <div className="App">
        <Header count={this.state.numberOfItemsInCart} cart={this.state.cart} 
          clear={this.clearCartOnSubmit} />
        <div className="container">
          <div className="row">
            <Side />
            <div className="col-md-9">
              <Carousel />
              <div className="row">
                {this.renderProductDetail()}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
