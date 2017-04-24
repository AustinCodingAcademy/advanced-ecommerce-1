import React from "react";
import "./App.css";
import Header from "./Header";
import CategoryList from "./CategoryList";
import Carousel from "./Carousel";
import ProductDetail from "./ProductDetail";
import TemplateTutorial from "./TemplateTutorial";

function App(props) {
  const productDetails = props.state.products.map((each, index) => {
    return (
    [
      <ProductDetail
        key={index}
        name={props.state.products[index].name}
        desc={props.state.products[index].description}
        reviews={props.state.products[index].reviews}
        rating={props.state.products[index].rating}
        imgUrl={props.state.products[index].imgUrl}
        price={props.state.products[index].price}
      />,
    ]
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

export default App;
