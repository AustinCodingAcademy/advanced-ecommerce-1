import React from "react";
import Carousel from "./Carousel";
import objectsOfProducts from "../App";

function ContentDisplay() {
  return (
    <div className="col-md-9">
      <Carousel />
      {objectsOfProducts}
      {/* <ProductDetails />*/}
    </div>
  );
}

export default ContentDisplay;
