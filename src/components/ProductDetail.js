import React from "react";
import PropTypes from "prop-types";

export default function ProductDetail(props) {
  const { name, price, description, reviews, rating } = props.product;
  const starSpans = [];
  for (let index = 0; index < rating; index++) {
    starSpans.push(<span key={index} className="glyphicon glyphicon-star" />);
  }
  const emptyStarSpans = [];
  for (let index = 0; index < 5 - rating; index++) {
    emptyStarSpans.push(
      <span key={index} className="glyphicon glyphicon-star-empty" />
    );
  }
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src="http://placehold.it/320x150" alt="" />
        <div className="caption">
          <h4 className="pull-right">{price}</h4>
          <h4>
            <a href="#">{name}</a>
          </h4>
          <p>
            {description}{" "}
            <a target="_blank" href="http://www.bootsnipp.com">
              Bootsnipp - http://bootsnipp.com
            </a>.
          </p>
        </div>
        <div className="ratings">
          <button onClick={onClick}>Add To Cart</button>
          <p className="pull-right">{reviews} reviews</p>
          <p>
            {starSpans}
            {emptyStarSpans}
          </p>
        </div>
      </div>
    </div>
  );

  function onClick() {
    props.onAddItemToCart(props.product);
  }
}


ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
  onAddItemToCart: PropTypes.func.isRequired,
};
