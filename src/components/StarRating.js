import React from 'react';

function StarRating(props) {
  const { rating } = props;
  const starSpans = [];
  
  for (var i = 1; i <= rating; i++) {
    starSpans.push(<span key={i} className="glyphicon glyphicon-star"></span>)
  }
  
  return (
    <p>{starSpans}</p>
  );
}

export default StarRating;
