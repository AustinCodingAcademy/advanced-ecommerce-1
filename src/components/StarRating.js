import React from 'react';

function StarRating (props) {
  let stars = [];
  for (let i = 0; i < props.rating; i++) {
    stars.push(<span className="glyphicon glyphicon-star"></span>);
  }

  return(
    <p>
      {stars}
    </p>
  );
}

export default StarRating;
