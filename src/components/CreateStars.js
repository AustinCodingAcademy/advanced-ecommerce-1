import React from "react";
import PropTypes from "prop-types";

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

CreateStars.propTypes = {
  starsSent: PropTypes.number.isRequired
};


export default CreateStars;
