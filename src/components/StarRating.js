import React from "react";

function StarRating(props) {
  let stars = props.stars;
  let starRating = [];
  const MAX_STARS = 5;
    for(var i =0; i < MAX_STARS; i++) {
      if(stars>0){
      starRating.push(<span className="glyphicon glyphicon-star"></span>);
      stars--;
      }
      else{
      starRating.push(<span className="glyphicon glyphicon-star-empty"></span>);
      }

      }
      return(
      <p>{starRating}</p>
  );

}

export default StarRating;
