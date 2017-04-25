import React from "react";
import propTypes from "prop-types";

function StarRating(props) {
  const {rating} = props;
  const arr = Array(rating).fill(null);
  const starSpans = arr.map((item, index) => {
    return <span key={index} className="glyphicon glyphicon-star"></span>;
  });

  return (
    <p>{starSpans}</p>
  );
}

StarRating.propTypes = {
  rating: propTypes.object.isRequired
};

export default StarRating;
