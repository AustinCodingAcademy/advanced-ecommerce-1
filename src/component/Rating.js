import React from "react";

function Rating(props) {
  let starsArray = [];
  for (let i = 0; i <= props.rating; i++) {
    starsArray.push(<span className="glyphicon glyphicon-star" key={i}></span>);
  }
  return(
    <p>{starsArray}</p>
  );
}

export default Rating;
