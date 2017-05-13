import React from "react";
import StarRating from "./StarRating";
import PropTypes from "prop-types";

function ProductDetail(props) {
  console.log (props, " from ProductDetail")
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src={props.url}  />
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

ProductDetail.propTypes = {
  price: PropTypes.arrayOf.isRequired,
  url: PropTypes.arrayOf.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf.isRequired,
  rating: PropTypes.arrayOf.isRequired,
};

export default ProductDetail;
