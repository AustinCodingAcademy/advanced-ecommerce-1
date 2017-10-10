import React from "react";


export default function StarDisplay(props) {
  const starRating = [];
  let r = 5 - props.stars;
  for (let i = 1; i <= props.stars; i++) {
    starRating.push(<span className="glyphicon glyphicon-star" key={i} />);
  }
  for (let z = 1; z <= r; z++) {
    starRating.push(<span className="glyphicon glyphicon-star-empty" key={z+10} />);
  }
  return <div>{starRating}</div>
}
