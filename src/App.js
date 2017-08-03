import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";

function App(props) {
  const products = props.products;
  console.log(products);

  const productDetails = products.map((product) => {
  return (<ProductDetail key={product.id} name={product.name} />);
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
              {products.map(prod => {
                  return(
                    <ProductDetail
                      key={prod.id}
                      product={prod}
                    />)
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
