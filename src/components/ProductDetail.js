import React from "react";
import StarRating from "./StarRating";

function ProductDetail(props) {
  const product = props.product;
  console.log(product);

  return (
    <div>{product.name}  {product.reviews} {product.description} {product.rating} {product.id} </div>
  );
};

{/*<div>
      <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src={product.imgUrl} alt={product.name} />
        <div className="caption">
          <h4 className="pull-right">{product.price}</h4>
          <h4><a href="#">{product.name}</a></h4>
          <p>{product.description}</p>
        </div>
        <div className="ratings">
          <p className="pull-right">{product.reviews} reviews</p>
          <StarRating rating={product.rating} />
        </div>
      </div>
    </div>
    </div>*/}



export default ProductDetail;
