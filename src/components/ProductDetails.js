import React from "react";
// import "./App.css";
import Rating from './Rating'

function ProductDetails (props) {
  const {product} = props;

  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
            <img src={product.imgUrl} alt={product.name}/>
            <div className="caption">
                <h4 className="pull-right">{product.price}</h4>
                <h4><a href="#">{product.name}</a>
                </h4>
                <p>{product.description} </p>
            </div>
            <div className="ratings">
                <p className="pull-right">{product.reviews} reviews</p>
                <p>
                    <Rating product={product} />
                </p>
            </div>
        </div>
    </div>
);
}

export default ProductDetails;


{/*

import PropTypes from "prop-types";



/*}
