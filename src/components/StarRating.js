import React from "react";

function StarRating(props) {

  const rating = [];
  for (let i = 0; i <= props.rating; i++) {
    rating.push(<span key={i} className="glyphicon glyphicon-star"></span>)
  }
  return (
    <p>{rating}</p>
  );
}

export default StarRating
