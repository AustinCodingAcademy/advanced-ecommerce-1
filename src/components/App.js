import React from "react";
import "./App.css";
import Header from "./Header";
import CategoryList from "./CategoryList";
import Carousel from "./Carousel";
import ProductDetail from "./ProductDetail";
import TemplateTutorial from "./TemplateTutorial";
import PropTypes from "prop-types";


function App(props) {
  const productDetails = props.state.products.map(product => {
    return (
      <ProductDetail
        {...product}
        key={product.id}
        desc={product.description}
      />
    );
  });
  return (
    <div className="App">
      <Header />
      <div className="container">

        <div className="row">
          <CategoryList />
        </div>

        <div className="row">
          <Carousel />
        </div>

        <div className="row">
          {productDetails}
          <TemplateTutorial />
        </div>

      </div>

      <div className="container">
        <hr />
        <footer>
          <div className="row">
            <div className="col-lg-12">
              <p>Copyright &copy; Your Website 2014</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

App.propTypes = {
  state: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
};

export default App;
