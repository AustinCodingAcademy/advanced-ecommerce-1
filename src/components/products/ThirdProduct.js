import React from "react";

function ThirdProduct(props) {
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src={props.product.imgUrl} alt="" />
        <div className="caption">
          <h4 className="pull-right">{props.product.price}</h4>
          <h4><a href="#">{props.product.name}</a>
          </h4>
          <p>{props.product.description}</p>
        </div>
        <div className="ratings">
          <p className="pull-right">{props.product.reviews} reviews</p>
          <p>
            {/* need to make function to display stars */}
            <span className="glyphicon glyphicon-star" />
            <span className="glyphicon glyphicon-star" />
            <span className="glyphicon glyphicon-star" />
            <span className="glyphicon glyphicon-star" />
            <span className="glyphicon glyphicon-star" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThirdProduct;
