import React, { Component } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductInfo from "./components/ProductInfo";
import PropTypes from "prop-types";
import SideBar from "./components/SideBar";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageWasClicked: false,
      newImage: props.list.products[1].imgUrl,
    };
  }

  handleImageClick() {
    console.log("handled event");
    this.setState({
      imageWasClicked: !this.state.imageWasClicked,
    });
  }


  render() {
    const myItems = this.props.list.products.map((item, index) => {
      return (
        <ProductInfo
          key={index}
          inner={item}
          onClick={this.handleImageClick.bind(this)}
        />
      );
    });

    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <SideBar />
            <div className="col-md-9">
              <Carousel />
              <div className="row">
                {myItems}
                <ProductDetails />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  list: PropTypes.shape({
    products: PropTypes.array.isRequired,
  })
};


export default App;
