import React from "react";
import FirstProduct from "./products/FirstProduct";
import SecondProduct from "./products/SecondProduct";
import ThirdProduct from "./products/ThirdProduct";
import FourthProduct from "./products/FourthProduct";
import FifthProduct from "./products/FifthProduct";

function ProductDetail(props) {
  return (
    <div> 
      <FirstProduct product={props.product[0]} />
      <SecondProduct product={props.product[1]} />
      <ThirdProduct product={props.product[2]} />
      <FourthProduct product={props.product[3]} />
      <FifthProduct product={props.product[4]} />
    </div>
  );
}

export default ProductDetail;
