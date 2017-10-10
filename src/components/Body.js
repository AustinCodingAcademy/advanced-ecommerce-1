import React from "react";
import Header from "./Header.js";
import  ProductDetail from "./ProductDetail.js";
import Footer from "./Footer.js";



function Body(props) {
  return(
    <div className="container">

          <Header />
          <ProductDetail  items={props.items} />

      </div>

  );
}

export default Body;
