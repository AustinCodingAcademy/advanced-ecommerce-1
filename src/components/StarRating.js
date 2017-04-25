import React from "react";

function StarRating(props) {
  const { rating } = props;
  const starSpans = [];
  
  for (let i = 1; i <= rating; i++) {
    starSpans.push(<span key={i} className="glyphicon glyphicon-star" />);
  }

  for (let j = 1; j <= 5 - rating; j++) {
    starSpans.push(<span key={j + 10} className="glyphicon glyphicon-star-empty" />);
  }
  
  return (
    <p>{starSpans}</p>
  );
}

export default StarRating;
