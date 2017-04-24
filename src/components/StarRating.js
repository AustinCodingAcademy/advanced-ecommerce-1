import React from "react";

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
export default StarRating;
