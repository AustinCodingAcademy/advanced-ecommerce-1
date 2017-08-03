import React from "react";
import "./App.css";

function Rating(product) {
  const ratingHolder = [];

  for (let i = 0; i < 5; i++) {
    if (i < product.rating) {
      ratingHolder.push(<span className="glyphicon glyphicon-star" />);
    } else {
      ratingHolder.push(<span className="glyphicon glyphicon-star-empty" />);
    }
  }
  return (
    <div>
      <p>{ratingHolder}</p>
    </div>
  );
}

export default Rating;
