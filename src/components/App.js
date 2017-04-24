import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import ProductDetail from "./ProductDetail";
import Footer from "./Footer";

function App(props) {
  const {products} = props;
  const productDetails = products.map((product) => {
    return <ProductDetail key={product.id} product={product} />;
  });

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <p className="lead">Test Company</p>
            <div className="list-group">
              <a href="#" className="list-group-item">Category 1</a>
              <a href="#" className="list-group-item">Category 2</a>
              <a href="#" className="list-group-item">Category 3</a>
            </div>
          </div>
          <div className="col-md-9">
            <Carousel />
            <div className="row">
              {productDetails}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
