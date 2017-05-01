import React from "react";

function CreateStars(props) {
  const collectionOfStars = [];
  for (let numOfStars = 0; numOfStars < props.starsSent; numOfStars++) {
    collectionOfStars.push(<span className="glyphicon glyphicon-star" key={numOfStars} />);
  }

  const newStars = collectionOfStars.map((starGlyph) =>
    starGlyph );
  
  return (
    <p>
      {newStars}
    </p>
  );
}

export default CreateStars;

// <CreateStars starsSent={props.info.rating} />
// <CreateStars starsSent={props.inner.rating} />
