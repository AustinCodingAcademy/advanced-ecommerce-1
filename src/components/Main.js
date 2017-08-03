import React from "react";
import Biglinks from "./Biglinks";
import Carousel from "./Carousel";
import ProductDetail from "./ProductDetail";
import Like from "./Like";



function Main(props) {
  var React = require("react"); // eslint-disable-line no-unused-vars

  let productDiv = props.products.map((p) =>{
    return <ProductDetail key={p.id} product={p} />
  });
  return (
    <div className="container">

      <div className="row">

        <Biglinks />

        <div className="col-md-9">

          <Carousel />

          <div className="row">

            {productDiv}

            <Like />

          </div>

        </div>

      </div>

    </div>
  );
}
export default Main;
