import React, { Component } from 'react';
import './App.css';
import "./index.css";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfItemsInCart: 0
    };
  }

  handleClick = () => {
    this.setState({numberOfItemsInCart: this.state.numberOfItemsInCart + 1});
  }

  render() {
    return (
      <div className="App">
     {/*<Header>*/}
      <Header numberOfItemsInCart={this.state.numberOfItemsInCart}/>
     {/*</Header>*/}

     <div className="container">

        <div className="row">

            <div className="col-md-3">
                <p className="lead">Wine List</p>
                <div className="list-group">
                    <a href="#" className="list-group-item">Red Wine </a>
                    <a href="#" className="list-group-item">White Wine</a>
                    <a href="#" className="list-group-item">Rose</a>
                </div>
            </div>

            <div className="col-md-9">
                {/*<Carousel>*/}
                  <Carousel />
                {/*</Carousel>*/}
                <div className="row">
                    {/*<ProductDetail>*/}
                      <ProductDetail products={this.props.products} handleClick={this.handleClick} />
                    {/*</ProductDetail>*/}
                </div>

            </div>

        </div>

    </div>

    <div className="container">

        <hr/>

      {/*<Footer>*/}
        <Footer />
       {/*</Footer>*/}
    </div>
      </div>
    );
  }
}

  export default App;
