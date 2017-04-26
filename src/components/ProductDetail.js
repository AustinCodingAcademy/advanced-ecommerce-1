import React from "react";
import PropTypes from "prop-types";

function ProductDetail({imgUrl, name, price, desc, reviews, rating}) {
  const stars = [];
  let i = 0;
  for (i; i < rating; i++) {
    stars.push(<span className="glyphicon glyphicon-star" />);
  }
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img
          src={imgUrl}
          alt=""
        />
        <div className="caption">
          <h4>
            <a href="#">{name}</a>
          </h4>
          <h4 className="">
            {price}
          </h4>
          <p>
            {desc}
          </p>
        </div>
        <div className="ratings">
          <p className="pull-right">
            {reviews} reviews
          </p>
          <p>
            {stars}
          </p>
        </div>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  reviews: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
};

export default ProductDetail;
