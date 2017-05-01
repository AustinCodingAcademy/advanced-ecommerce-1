import React from "react";
import CreateStars from "./CreateStars";


function CreateReviews(props) {
  console.log(props.info);
  if (props.isTrue) {
    return <div><p>{props.info.description}</p><p><CreateStars starsSent={props.info.rating} /></p></div>;
  } return <div />;

}

export default CreateReviews;
