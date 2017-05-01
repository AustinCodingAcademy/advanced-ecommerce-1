import React from "react";
import CreateStars from "./CreateStars";
import PropTypes from "prop-types";


function CreateReviews(props) {
  if (props.isTrue) {
    return <div>
      <p>{props.info.description}</p>
      <p>
        <CreateStars starsSent={props.info.rating} />
      </p>
    </div>;
  } return <div />;

}

CreateReviews.propTypes = {
  isTrue: PropTypes.bool.isRequired,
  info: PropTypes.shape({
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  })
};

export default CreateReviews;
