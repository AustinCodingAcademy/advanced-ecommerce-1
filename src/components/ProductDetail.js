import React from "react";
import FirstProduct from "./products/FirstProduct";
import SecondProduct from "./products/SecondProduct";
import ThirdProduct from "./products/ThirdProduct";
import FourthProduct from "./products/FourthProduct";
import FifthProduct from "./products/FifthProduct";

function ProductDetail(props) {
  return (
    <div> 
      <FirstProduct product={props.product} />
      <SecondProduct />
      <ThirdProduct />
      <FourthProduct />
      <FifthProduct />
      {console.log(props.product + "product detail")}
    </div>
  );
}

export default ProductDetail;
