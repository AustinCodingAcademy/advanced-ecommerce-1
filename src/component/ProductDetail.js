import React from "react";
import Rating from "./Rating";

function ProductDetail(props) {

  const productDivs = props.product.map(product => {
    return (
      <div className="col-sm-4 col-lg-4 col-md-4" key={product.id}>
        <div className="thumbnail">
          <img src={product.imgUrl} alt=""/>
          <div className="caption">
              <h4 className="pull-right">{product.price}</h4>
              <h4><a href="#">{product.name}</a>
              </h4>
              <p>{product.description}</p>
          </div>
          <div className="ratings">
              <p className="pull-right">{product.reviews} reviews</p>

                <Rating rating={product.rating} />

          </div>
        </div>
      </div>
    );
  });

  return(
    <div className="row">
      {productDivs}
    </div>
  );
}

export default ProductDetail;
