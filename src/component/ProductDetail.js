import React from "react";
import StarRating from "./StarRating";
import PropTypes from "prop-types";

function ProductDetail(props) {
//  console.log (props, " from ProductDetail")
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src={props.url} alt="not found" />
        <div className="caption">
          <h4>{props.price}</h4>
          <h5><a href="#">{props.name} </a>
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
  price: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reviews: PropTypes.number,
  rating: PropTypes.number,
};

export default ProductDetail;
