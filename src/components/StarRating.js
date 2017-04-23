import React from 'react';

function StarRating(props){
    let stars = props.stars;
    let starRating = []
    for(var i =0; i < 5; i++){
      if(stars>0){
        starRating.push(<span className="glyphicon glyphicon-star"></span>);
        stars--;
      }
      else{
        starRating.push(<span className="glyphicon glyphicon-star-empty"></span>);
      }

    }
  return(
    <p>
        {starRating}
    </p>
  );

}

export default StarRating;
