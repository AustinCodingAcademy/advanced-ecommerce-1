import React from "react";

function stars(props) {
  let allStars = [];
  let fullStars = props.products[productID].rating;
  let emptyStars = 5 - fullStars;

    for (var i = 0; i < fullStars; i++) {
        allStars.push(<span className="glyphicon glyphicon-star" key={i}></span>);
    }
    for (var i = 0; i < emptyStars; i++) {
        allStars.push(<span className="glyphicon glyphicon-star" key={i}></span>);
    }

  return (
    <p>{allStars}</p>
  )
}

export default stars;
