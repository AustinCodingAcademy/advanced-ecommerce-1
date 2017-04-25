import React from "react";

function ProductDetail(props) {
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img
          src={props.imgUrl}
          alt=""
        />
        <div className="caption">
          <h4>
            <a href="#">{props.name}</a>
          </h4>
          <h4 className="">
            {props.price}
          </h4>
          <p>
            {props.desc}
          </p>
        </div>
        <div className="ratings">
          <p className="pull-right">
            {props.reviews} reviews
          </p>
          <p>
            {props.rating}
            <span className="glyphicon glyphicon-star" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
