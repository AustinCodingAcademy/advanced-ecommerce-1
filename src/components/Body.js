import React from "react";
import ProductDetail from "./ProductDetail";
import productsData from "../state.js";

function Body() {
  const { products } = productsData;
  console.log(products);
  return (
    <div className="container">

      <div className="row">

        <div className="col-md-9">

          <div className="row">
            {
              products.map(product => {
                return (
                  <ProductDetail
                    price={product.price}
                    description={product.description}
                    reviews={product.reviews}
                    name={product.name}
                  />
                );
              })
            }
          </div>

        </div>

      </div>

    </div>
  );
}


export default Body;
