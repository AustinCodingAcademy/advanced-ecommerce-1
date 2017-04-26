import React from "react";
import StarRating from "./StarRating";

function ProductDetail(props) {
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src={props.url} alt="" />
        <div className="caption">
          <h4>{props.price}</h4>
          <h5><a href="#">{props.name}</a>
          </h5>
          <p>{props.description}</p>
        </div>
        <div className="ratings">
          <p className="pull-right">{props.reviews}</p>
          <StarRating rating={props.rating} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
