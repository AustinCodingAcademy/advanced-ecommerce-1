import React, {Component} from "react";
// import logo from "./logo.svg";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import MenuLeft from "./components/MenuLeft";
// import Template from "./components/Template";
import PropTypes from "prop-types";
import "./App.css";


export class App extends Component {
  state={
    numberOfItemsInCart: 0,
    cart: []
  }
  handleAddToCart = (product) => {
    const cartArr = [...this.state.cart];
    cartArr.push({item: product.name, price: product.price, description: product.description});
    console.log(cartArr);
    this.setState({numberOfItemsInCart: this.state.numberOfItemsInCart + 1,
      cart: cartArr}); 
  }

  render() {
    const productDiv = this.props.products.map((p, index) => 
      <ProductDetail
        product={p}
        key={index}
        clickEvent={this.handleAddToCart}
      />
    );

    

    return (
      <div className="App">
        <Header 
          numberOfItemsInCart={this.state.numberOfItemsInCart} 
          cart={this.state.cart}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <MenuLeft />
            </div>
            <div className="col-md-9">
              <Carousel />
              <div className="row">
                {productDiv}
                {/* <Template /> */}
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

App.propTypes = {
  products: PropTypes.array.isRequired,
  numberOfItemsInCart: PropTypes.number.isRequired
};

export default App;
