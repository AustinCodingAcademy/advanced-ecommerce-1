import React from "react";
import ProductDetail from "./ProductDetail";
import productsData from "./state.js";

function Body() {
  const { products } = productsData;
  console.log(products, " from body");
  return (
    <div className="container">
      <div className="col-md-9">
        <div className="row">

          <div className="row">
            {
                        products.map(product => {
                          return (
                            <ProductDetail
                              key={product.id}
                              price={product.price}
                              description={product.description}
                              reviews={product.reviews}
                              name={product.name}
                              url={product.imgUrl}
                              rating={product.rating}
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
