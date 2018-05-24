import React from "react";

export default function ProductDetail(props) {
  const { name, price, description, reviews, rating} = props.product;
  const starSpans = [];
  for (let index = 0; index < rating; index++) {
    starSpans.push(<span key={index} className="glyphicon glyphicon-star" />);    
  }
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src="http://placehold.it/320x150" alt="" />
        <div className="caption">
          <h4 className="pull-right">{price}</h4>
          <h4>
            <a href="#">{name}</a>
          </h4>
          <p>
            {description} {" "}
            <a target="_blank" href="http://www.bootsnipp.com">
              Bootsnipp - http://bootsnipp.com
            </a>.
          </p>
        </div>
        <div className="ratings">
          <p className="pull-right">{reviews} reviews</p>
          <p>
            {starSpans}
          </p>
        </div>
      </div>
    </div>
  );
}
