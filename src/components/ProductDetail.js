import React from "react";
import FirstProduct from "./products/FirstProduct";
import SecondProduct from "./products/SecondProduct";
import ThirdProduct from "./products/ThirdProduct";
import FourthProduct from "./products/FourthProduct";
import FifthProduct from "./products/FifthProduct";

function ProductDetail() {
  return (
    <div> 
      <FirstProduct />
      <SecondProduct />
      <ThirdProduct />
      <FourthProduct />
      <FifthProduct />
    </div>
  );
}

export default ProductDetail;
