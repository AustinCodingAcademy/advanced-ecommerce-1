import React, { Component } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductInfo from "./components/ProductInfo";
import State from "./state";
import SideBar from "./components/SideBar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageWasClicked: false
    };
  }

  handleImageClick(event) {
    console.log("Handled Image Click", event);
    this.setState({
      imageWasClicked : !this.state.imageWasClicked
    });
  }

  render() {
    const myItems = this.props.products.map((item, index) => {
      return (
        <ProductInfo
          key={item.id}
          inner={item}
          onClick={() => {
            this.handleImageClick(item.id);
          }}
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


export default App;
